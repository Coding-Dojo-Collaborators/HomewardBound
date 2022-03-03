import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'reactstrap';


// Reactstrap components
import {
  List,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

// MUI
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PetsIcon from '@mui/icons-material/Pets';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PaidIcon from '@mui/icons-material/Paid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { createTheme } from '@mui/material/styles';

// Styles
import styles from '../../../assets/css/modules/paper-dashboard.module.css';
import './checklist.css';



const Rehome = () => {
  const [value, setValue] = useState(1);
  // const [activeTab, setActiveTab] = useState('radio1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const divContent = {
    width: '80%',
    margin: '50px auto',
  }
  const ListItems = styled(List)({
    display: 'block',
    textIndent: '-1.5px',
    paddingLeft: '45px',
    fontSize: '15px',
    lineHeight: '1.5em',
    fontWeight: '300 !important',
  })
  const PawIcon = styled(PetsIcon)({
    fontSize: '14px',
    margin: '0 10px 5px -27px'
  })
  const ColoredCheckbox = styled(Checkbox)({
    color: '#2c2c2c',
    '&.Mui-checked': {
      color: '#f47660',
    },
    fontSize: '15px',
    lineHeight: '1.5em',
    fontWeight: '300 !important',
    margin: '0 0 0 19px'
  })
  const CheckboxLabel = styled(FormControlLabel)({
    fontSize: '15px',
    lineHeight: '1.5em',
    fontWeight: '300 !important',
  })

  return (
    <>
      <div className={`${styles.content}`} style={divContent}>
        <Card>
          <CardHeader>
            <CardTitle tag='h2' className='text-center p-4'>Find Your Pet a New Loving Home</CardTitle>
            <p className='card-category px-4'>
              Fill out the following form to ensure that your pet finds a new home!
            </p>
          </CardHeader>
          <CardBody>
            <Card>
              <CardBody>
                <div className='places-buttons'>
                  <Row>
                    <Col className='ml-auto mr-auto text-center mb-3 mt-2' md='12'>
                      <CardTitle tag='h4'>Adoption Form:</CardTitle>
                    </Col>
                  </Row>
                  <Row className='p-3 px-5'>
                    <ul class='list-group'>
                      <ListItems>
                        <div id="todays-date"><PawIcon />
                          <label class="p-1" for="todays-date">Today's Date: </label>
                          <select name="day" className='m-1'>
                            <option value="day">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                          <select name="month" className='m-1'>
                            <option value="month">Month</option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                          </select>
                          <select name="year" className='m-1'>
                            <option value="" e="year">Year</option>
                            <option value="2012">2021</option>
                            <option value="2013">2022</option>
                            <option value="2014">2023</option>
                            <option value="2015">2024</option>
                            <option value="2016">2025</option>
                            <option value="2017">2026</option>
                            <option value="2018">2027</option>
                            <option value="2019">2028</option>
                            <option value="2020">2029</option>
                            <option value="2021">2030</option>
                          </select>
                        </div>
                      </ListItems>
                      <ListItems>
                        <div id="dogName"> <PawIcon />
                          <label class="p-1" >Name of the pet you wish to put up for adoption: </label>
                          <input type="text" className='m-1' placeholder="Pet Name" />
                        </div>
                      </ListItems>
                      <ListItems>
                        <div>   <PawIcon />
                          <label className='m-2'>Pet's Gender:</label>
                          <input type="radio" id="male" name="gender" value="1" />
                          <label class="p-1" for="male">Male</label>

                          <input type="radio" id="female" name="gender" value="2" />
                          <label class="m-1" for="female">Female</label>
                        </div>

                      </ListItems>

                      <ListItems>
                        <div><PawIcon />
                          <label class="m-1" name="petage">Age of Pet: </label>
                          <input type="tel" id="phone" className='m-2' placeholder="Age" />
                        </div>
                      </ListItems>
                      <ListItems>
                        <div><PawIcon />
                          <label class="m-1" name="weight">Weight of Pet(Lb): </label>
                          <input type="number" id="weight" className='m-2' placeholder="Weight" />
                        </div>
                      </ListItems>
                      <ListItems>
                        <div><PawIcon />
                          <label class="m-1" name="breed">Breed of Pet: </label>
                          <input type="tel" id="breed" className='m-2' placeholder="Breed" />
                        </div>
                      </ListItems>
                      <ListItems>
                        <div><PawIcon />
                          <label class="m-1" name="children">Good with Children: </label>
                          <input type="checkbox" id="children" className='m-2' placeholder="" />
                        </div>
                      </ListItems>
                      <ListItems>
                        <div><PawIcon />
                          <label class="m-1" name="medications">List Any Medications/Condtions </label>
                          <input type="text" id="medications" className='m-2' placeholder="Medications/Conditions" />
                        </div>
                      </ListItems>
                      <ListItems>
                        <div>   <PawIcon />
                          <label className='m-2'>Pet's Current Home:</label>
                          <input type="radio" id="House" name="House" value="1" />
                          <label class="p-1" for="House">House</label>

                          <input type="radio" id="Apartment" name="Apartment" value="2" />
                          <label class="m-1" for="Apartment">Apartment</label>

                          <input type="text" id="other" name="other" placeholder='other' />

                        </div>
                      </ListItems>
                      <Button
                        onClick={""}
                        className='btn login-btn mt-4 w-25'
                        type='button'
                      >
                        <i className='nc-icon nc-align-left-2 me-2'>
                        </i>
                        <small>Submit Application</small>
                      </Button>
                    </ul>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </CardBody>
        </Card>

      </div>

      {/* <div className='checkbody'>
        <div >
          <main className='checkmain '>
            <h1 className='p-5 text-center  '> <u>Checklist for New Adopters</u><img className='checkimage' src='https://www.svgrepo.com/show/254981/checklist.svg' alt='' /></h1>
            <h4 className='p-3'>Congratulations on adopting a pet! You are embarking on a wonderful and rewarding relationship. Because adopting a new pet comes with a lot of change for both pet and pet parent, we’ve compiled a checklist to help make the transition as smooth as possible.</h4>
            <p className='p-4'>
              <p className='bold1'>
                Questions for All Adopters:<br />
              </p>
              ● Do you have any other pets and how will they react to a new pet? <br />
              ● Is your current residence suited to the pet you’re considering?<br />
              ● How will your social life or work obligations affect your ability to care for a pet?<br />
              ● Do you have a plan for your new pet during vacations and/or work travel?<br />
              ● How do the people you live with feel about having a pet in the house?<br />
              ● Are you (or your spouse, partner, or roommate) intolerant of hair, dirt, and other realities of sharing your home with a pet, such as allergies?<br />
              ● Do you or any of your household/family members have health issues that may be affected by a pet?<br />
              ● What breed, or species, of animal, is the best fit with your current lifestyle?<br />
              ● Is there tension in the home? Pets quickly pick up on stress in the home, and it can exacerbate their health and behavior problems.<br />
              ● Is there an adult in the family who has agreed to be ultimately responsible for the pet’s care?<br />
            </p>
            <input id='radio1' type='radio' name='css-tabs' checked={activeTab == 'radio1'} onClick={(e) => setActiveTab('radio1')} />
            <input id='radio2' type='radio' name='css-tabs' checked={activeTab == 'radio2'} onClick={(e) => setActiveTab('radio2')} />
            <input id='radio3' type='radio' name='css-tabs' checked={activeTab == 'radio3'} onClick={(e) => setActiveTab('radio3')} />
            <input id='radio4' type='radio' name='css-tabs' checked={activeTab == 'radio4'} onClick={(e) => setActiveTab('radio4')} />
            <input id='radio5' type='radio' name='css-tabs' checked={activeTab == 'radio5'} onClick={(e) => setActiveTab('radio5')} />
            <div id='tabs'> <u>

              <label id='tab1' for='radio1'>Considerations</label>
              <label id='tab2' for='radio2'>Size</label>
              <label id='tab3' for='radio3'>Time</label>
              <label id='tab4' for='radio4'>Costs</label>
              <label id='tab5' for='radio5'> Starter<br />Shopping List</label>
            </u>
            </div>
            <div id='content'>
              <section id='content1'>
                <div class='some-page-wrapper'>
                  <div class='row'>
                    <div class='column'>
                      <div className='font-weight-bold'>
                        Dog Adoption
                      </div>
                      <p>
                        ● What do you expect your pet to contribute to your life? For example, do you want a running and hiking buddy, or is your idea of exercise watching it on TV?<br />
                        ● If you are thinking of adopting a young animal, do you have the time and patience to work with the pet through its adolescence, taking house-breaking, chewing, and energy level into account?<br />
                        ● Have you considered your lifestyle carefully and determined whether a younger or older animal would be a better match for you?<br />
                        ● Can you train and handle a pet with behavior issues or are you looking for an easy-going friend?<br />
                        ● Do you need a pet who will be reliable with children or one you can take with you when you travel?<br />
                        ● Do you want a pet who follows you all around the house or would you prefer a less clingy, more independent character?<br />
                      </p>

                    </div>
                    <div class='column'>
                      <div class='green-column'>
                        Cat Adoption
                      </div>
                      <p>● If you are thinking of adopting a young cat, do you have the time and patience to work with the pet through its adolescence, taking playing, training, and energy level into account?<br />
                        ● Have you considered your lifestyle carefully and determined whether a younger or older cat would be a better match for you?<br />
                        ● Can you train and handle a cat with behavior issues or are you looking for an easy-going friend?<br />
                        ● Do you need a cat who will be reliable with children or one you can take with you when you travel?<br />
                        ● Do you want a cat who follows you all around the house or would you prefer a less clingy, more independent character?</p>

                    </div>
                  </div>
                </div>
              </section>
              <section id='content2'>
                <div class='some-page-wrapper'>
                  <div class='row'>
                    <div class='column'>
                      <div className='font-weight-bold'>
                        Size of Dog Consideration
                      </div>
                      <p>
                        ● What size dog can your home accommodate?<br />
                        ● Will you have enough room if your dog grows to be bigger than expected?<br />
                        ● What size pet would suit the other people who live in or visit your home regularly?<br />
                        ● Do you have another pet to consider when choosing the size of your next pet?<br />
                        ● How big a pet can you travel comfortably with?<br />
                      </p>

                    </div>
                    <div class='column'>
                      <div class='green-column'>
                        Cat Size
                      </div>


                    </div>
                  </div>
                </div>
              </section>
              <section id='content3'>
                <div class='some-page-wrapper'>
                  <div class='row'>
                    <div class='column'>
                      <div className='font-weight-bold'>
                        Dog Time Consideration
                      </div>
                      <p>
                        ● Pets need to be fed two to three times a day, more often in the case of puppies, and need a constant supply of fresh water.<br />
                        ● A responsible pet parent should spend at least one hour per day giving direct attention to his or her pet. This may include training, exercising, grooming, and playing, or, with cats, may just be lap time on the couch. Dogs will need to be taken out to potty several times a day.<br />
                        ● A pet with an abundance of energy needs more time to exercise and interactive toys to keep them entertained.<br />
                        ● Pets with long coats need 20 minutes a day of grooming to prevent matting. <br />
                        ● Pets with certain medical conditions may need additional attention, including specifically timed injections in the case of diabetic animals.<br />
                      </p>
                    </div>
                    <div class='column'>
                      <div class='green-column'>
                        Cat Time Consideration
                      </div>
                      <p>● Cats need to be fed once to twice a day, more often in the case of kittens and need a constant supply of fresh water. <br />
                        ● A responsible pet parent should spend at least one hour per day giving direct attention to his or her cat. This may include training, exercising, grooming, and playing, or may just be lap time on the couch.<br />
                        ● A cat with an abundance of energy needs more time to exercise and interactive toys to keep them entertained.<br />
                        ● Cats with long coats need 20 minutes a day of grooming to prevent matting.<br />
                        ● Cats with certain medical conditions may need additional attention, including specifically timed injections in the case of diabetic animals.<br />
                        ● Remember that adopted cats may need additional bonding and reassurance time in the early weeks.<br />
                      </p>

                    </div>
                  </div>
                </div>
              </section>
              <section id='content4'>
                <div class='some-page-wrapper'>
                  <div class='row'>
                    <div class='column'>
                      <div className='font-weight-bold'>
                        Dog Cost Consideration
                      </div>
                      <p>
                        More likely than not, the adopting agency will charge a fee to help defray the cost of taking in unwanted or lost animals. The adoption fee you pay will be a tiny fraction of the money you will spend over the life of your pet. You may need to pay for your adopted pet to be spayed or neutered before bringing him or her home. Some expenses are mandatory for all pets, including:<br />
                        <br />
                        ● Food<br />
                        ● Routine veterinary care<br />
                        ● Licensing according to local regulations<br />
                        ● Collars, leashes, and identification tags<br />
                        ● Kitty litter and box<br />
                        ● Basic grooming equipment and supplies.<br />
                        <br />
                        Other expenditures may not be required but are highly recommended:<br />
                        ● Permanent identification, such as a microchip or tattoo<br />
                        ● Training classes<br />
                        ● Additional grooming supplies or professional grooming (depending on your new pet’s needs)<br />
                        ● A spare collar or leash<br />
                        ● A bed and toys<br />
                        ● A crate or carrier<br />
                        <br />
                        Unexpected costs: <br />
                        ● Accidents and illness can result in costly emergency veterinary care. <br />
                        ● Recovery tools for finding a missing pet can include posters and rewards. <br />
                        ● A pet with special physical or behavioral challenges may require specialized professional support to overcome any obstacles these issues present.<br />
                        <br />
                        For more on typical pet care costs visit Annual Dog Care Costs and Annual Cat Care Costs.<br />
                      </p>
                    </div>
                    <div class='column'>
                      <div class='green-column'>
                        Cat Cost Consideration
                      </div>
                      <p>
                        More likely than not, the adopting agency will charge a fee to help defray the cost of taking in unwanted or lost animals. The adoption fee you pay will be a tiny fraction of the money you will spend over the life of your pet. You may need to pay for your adopted cat to be spayed or neutered before bringing him or her home. Some expenses are mandatory for all pets, including:<br />
                        <br />
                        ● Food<br />
                        ● Routine veterinary care<br />
                        ● Licensing according to local regulations<br />
                        ● Collars and identification tags<br />
                        ● Kitty litter and box<br />
                        ● Basic grooming equipment and supplies.<br />
                        <br />
                        Other expenditures may not be required but are highly recommended:<br />
                        ● Permanent identification, such as a microchip<br />
                        ● Additional grooming supplies or professional grooming (depending on your new cat’s needs)<br />
                        ● A spare collar<br />
                        ● A bed and toys<br />
                        ● A crate or carrier<br />
                        <br />
                        Unexpected costs: <br />
                        ● Accidents and illness can result in costly emergency veterinary care. <br />
                        ● Recovery tools for finding a missing pet can include posters and rewards.<br />
                        ● A cat with special physical or behavioral challenges may require specialized professional support to overcome any obstacles these issues present.<br />
                        <br />
                        For more on typical cat care costs visit Annual Cat Care Costs.<br />
                        <br />                    </p>

                    </div>
                  </div>
                </div>
              </section>
              <section id='content5'>
                <div class='some-page-wrapper'>
                  <div class='row'>
                    <div class='column'>
                      <div className='font-weight-bold'>
                        Shopping List for Dog Owner
                      </div>
                      <p>
                        <br />

                        It may be a good idea to wait until you select your new pet before you begin shopping for supplies. For example, some items, such as food and water bowls or collars and harnesses, depend upon the size of the pet you will be adopting.<br />

                        Also, be sure to find out which food your pet was eating in the shelter or foster home so that you can provide the same in the beginning, again to ease the transition. After the pet has settled in, talk with your veterinarian about switching to the food of your choice.<br />
                        <br />
                        Once you’ve selected your pet, here’s a checklist of supplies you may need:<br />
                        <br />
                        ● Food and water bowls<br />
                        ● Food (canned and/or dry)<br />
                        ● Collar<br />
                        ● Four to six-foot leash<br />
                        ● ID tag with your phone number<br />
                        ● Hard plastic carrier or foldable metal crate<br />
                        ● Dog bed<br />
                        ● Doggy shampoo and conditioner<br />
                        ● Nail clippers<br />
                        ● Canine toothbrush and toothpaste<br />
                        ● Brush or comb (depends on your pet’s coat length and type)<br />
                        ● Super-absorbent paper towels
                        ● Sponge and scrub brush<br />
                        ● Non-toxic cleanser<br />
                        ● Enzymatic odor neutralizer<br />
                        ● Plastic poop baggies (biodegradable ones are best) or pooper scooper<br />
                        ● Absorbent house-training pads<br />
                        ● Variety of toys (a ball, rope, chew toy and puzzle toy are good starts)<br />
                        ● Variety of treats (such as small cookies, larger rawhides, etc.)<br />
                        ● First-aid supplies<br />
                        ● Baby gate(s)<br />
                      </p>
                    </div>
                    <div class='column'>
                      <div class='green-column'>
                        Shopping List for Cat Owner
                      </div>
                      <br />
                      <p>
                        It may be a good idea to wait until you select your new cat before you begin shopping for supplies. For example, some items, such as food and water bowls or collars and harnesses, depend upon the size of the cat you will be adopting.<br />
                        Also, be sure to find out which food your pet was eating in the shelter or foster home so that you can provide the same in the beginning, again to ease the transition. After the pet has settled in, talk with your veterinarian about switching to the food of your choice.<br />
                        <br />
                        Once you’ve selected your pet, here’s a checklist of supplies you may need:<br />
                        <br />
                        ● Food and water bowls<br />
                        ● Food (canned and/or dry)<br />
                        ● Litter box and scooper<br />
                        ● Kitty litter<br />
                        ● Collar<br />
                        ● ID tag with your phone number<br />
                        ● Hard plastic carrier<br />
                        ● Nail clippers<br />
                        ● Feline toothbrush and toothpaste<br />
                        ● Brush or comb (depends on your cat’s coat length and type)<br />
                        ● Super-absorbent paper towels<br />
                        ● Sponge and scrub brush<br />
                        ● Non-toxic cleanser<br />
                        ● Enzymatic odor neutralizer<br />
                        ● Variety of toys (toys including catnip are a favorite)<br />
                        ● First-aid supplies<br /></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div> */}
    </>
  )
}

export default Rehome