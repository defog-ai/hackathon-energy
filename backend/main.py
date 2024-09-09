from fastapi import FastAPI, Request
import pandas as pd

costs_dollar_per_MWh = {
  "solar": 60,
  "lng": 100,
  "hydrogen": 80,
  "nuclear": 180,
  "geothermal": 80,
  "electricity_imports": 27,
  "others": 100
}

# FastAPI app
app = FastAPI()
df = pd.read_csv("usage_2050.csv", index_col=0)


@app.post("/energy-calculation")
async def calculate_energy_stats(request: Request):
    # Get housing_type and region
    data = await request.json()
    sources = data.get('energy_sources')
    housing_type = data.get('housing_type')
    region = data.get('region')

    weighted_cost = 0
    for source, proportion in sources.items():
        weighted_cost += proportion * costs_dollar_per_MWh.get(source.lower(), 0)

    # Get time-series of annual consumption
    predicted_consumption = df[(df['region'] == region) & (df['housing_type'] == housing_type)]['consumption'].values[0]

    return {
        "weighted_average_cost": weighted_cost,
        "annual_consumption": predicted_consumption
    }

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)