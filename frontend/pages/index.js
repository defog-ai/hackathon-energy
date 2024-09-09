// create an app to help a policymaker predict housing energy cost based on different future scenarios. define the inputs as two kinds of outputs - one for the chosen mix of energy sources and another one for housing type and area
// import the necessary libraries
import React from 'react';
import { useState } from 'react';

// create a function to define the app
export default function Home() {
  // define the state variables
  const [energyMix, setEnergyMix] = useState();
  const [housingType, setHousingType] = useState();
  const [housingArea, setHousingArea] = useState();

  const predefinedEnergyMix = [
    {scenario: 'Global Tech Progress', sources: [
      { source: 'electricity imports', percentage: 0.37 },
      { source: 'hydrogen', percentage: 0.37 },
      { source: 'geothermal', percentage: 0.15 },
      { source: 'other', percentage: 0.04 }
    ]},
    {scenario: 'Slow Tech Cooperation', sources: [
      { source: 'solar', percentage: 0.3 },
      { source: 'wind', percentage: 0.2 },
      { source: 'hydro', percentage: 0.3 },
      { source: 'nuclear', percentage: 0.2 }
    ]},
    {scenario: 'Tech-driven Fragmentation', sources: [
      { source: 'solar', percentage: 0.1 },
      { source: 'wind', percentage: 0.4 },
      { source: 'hydro', percentage: 0.3 },
      { source: 'nuclear', percentage: 0.2 }
    ]},
  ];

  const predefinedHousingTypes = [
    '1-room / 2-room', '3-Room', '4-Room', '5-Room and Executive', 'Private Apartments and Condominiums', 'Landed Properties'];

  const predefinedHousingAreas = [
    'Bishan', 'Bukit Merah', 'Bukit Timah', 'Downtown', 'Geylang', 'Kallang', 'Marine Parade', 'Museum', 'Newton', 'Novena', 'Orchard', 'Outram', 'Queenstown', 'River Valley', 'Rochor', 'Singapore River', 'Southern Islands', 'Tanglin', 'Toa Payoh', 'Bedok', 'Changi', 'Pasir Ris', 'Paya Lebar', 'Tampines', 'Ang Mo Kio', 'Hougang', 'Punggol', 'Seletar', 'Sengkang', 'Serangoon', 'Mandai', 'Sembawang', 'Sungei Kadut', 'Woodlands', 'Yishun', 'Bukit Batok', 'Bukit Panjang', 'Choa Chu Kang', 'Clementi', 'Jurong East', 'Jurong West', 'Pioneer'
  ];

  const [inputs, setInputs] = useState({
    selectedEnergyMix: [{ source: '', percentage: '' }],
    selectedHousingType: '',
    selectedHousingArea: '',
  });

  // create a function to handle the input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // create a function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  // return the form with the input fields
 
  return (
    <div className='flex flex-col gap-4 m-8'>
      <form onSubmit={handleSubmit}>
      {/* create a dropdown that shows the different energy mix scenario options and allows the user to select one. stores the selected option in the state variables*/}
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-xl font-bold'>Energy Mix Scenario:</label>
          {/* add a description of each of the energy mix scenarios based on the sources and their percentage */}
          <p>Global Tech Progress: electricity imports (37%), hydrogen (37%), geothermal (15%), other (4%)</p>
          <p>Slow Tech Cooperation: solar (30%), wind (20%), hydro (30%), nuclear (20%)</p>
          <p>Tech-driven Fragmentation: solar (10%), wind (40%), hydro (30%), nuclear (20%)</p>
          <br />
          <select name="selectedEnergyMix" onChange={handleInputChange}>
            {predefinedEnergyMix.map((mix, index) => (
              <option key={index} value={mix.scenario}>{mix.scenario}</option>
            ))}
          </select>
        </div>
      {/* create two more dropdowns that show options for housingtype and housing area. store the selected option in the state variables  */}
        <div className='flex flex-col'></div>
          <label className='text-xl font-bold'>Housing Type:</label>
          <select name="selectedHousingType" onChange={handleInputChange}>
            {predefinedHousingTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-xl font-bold'>Housing Area:</label>
          <select name="selectedHousingArea" onChange={handleInputChange}>
            {predefinedHousingAreas.map((area, index) => (
              <option key={index} value={area}>{area}</option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}