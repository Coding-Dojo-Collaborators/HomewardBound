import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#f6917f',
//       main: '#f47660',
//       dark: '#aa5243',
//       contrastText: '#fff',
//     },
//   },
// });

const Checklist = () => {
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
        <Row>
          <Col md='12'>
            <Card>
              <CardHeader>
                <CardTitle tag='h2' className='text-center p-4'>Checklist for New Adopters</CardTitle>
                <p className='card-category px-4'>
                  Congratulations on adopting a pet! You are embarking on a wonderful and rewarding relationship. Because adopting a new pet comes with a lot of change for both pet and pet parent, we’ve compiled a checklist to help make the transition as smooth as possible.
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md='12'>
                    <Card>
                      <CardBody>
                        <div className='places-buttons'>
                          <Row>
                            <Col className='ml-auto mr-auto text-center mb-3 mt-2' md='12'>
                              <CardTitle tag='h4'>Questions for All Adopters</CardTitle>
                            </Col>
                          </Row>
                          <Row>
                            <Col className='ml-auto mr-auto' lg='12'>
                              <Row className='p-3 px-5'>
                                <ul class='list-group'>
                                  <ListItems>
                                    <PawIcon /> Do you have any other pets and how will they react to a new pet?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> Is your current residence suited to the pet you’re considering?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> How will your social life or work obligations affect your ability to care for a pet?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> Do you have a plan for your new pet during vacations and/or work travel?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> How do the people you live with feel about having a pet in the house?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> Are you (or your spouse, partner, or roommate) intolerant of hair, dirt, and other realities of sharing your home with a pet, such as allergies?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> Do you or any of your household/family members have health issues that may be affected by a pet?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> What breed, or species, of animal, is the best fit with your current lifestyle?
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> Is there tension in the home? Pets quickly pick up on stress in the home, and it can exacerbate their health and behavior problems.
                                  </ListItems>
                                  <ListItems>
                                    <PawIcon /> Is there an adult in the family who has agreed to be ultimately responsible for the pet’s care?
                                  </ListItems>
                                </ul>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md='6'>
                    <CardTitle tag='h4' className='text-center mb-3'>Dog Adoption</CardTitle>
                    <Card className='card-plain'>
                      <TabContext value={value}>
                        <CardHeader>
                          <CardTitle tag='h5'>
                            <TabList
                              onChange={handleChange}
                              variant="scrollable"
                              scrollButtons="auto"
                              centered
                              aria-label='icon label tabs example'
                            >
                              <Tab icon={<PsychologyIcon />} label='CONSIDERATIONS' value='1' />
                              <Tab icon={<PetsIcon />} label='SIZE' value='2' />
                              <Tab icon={<MoreTimeIcon />} label='TIME' value='3' />
                              <Tab icon={<PaidIcon />} label='COSTS' value='4' />
                              <Tab icon={<AddShoppingCartIcon />} label='SHOPPING LIST' value='5' />
                            </TabList>
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <TabPanel value='1'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>
                              Considerations for Dog Adoption:
                            </h5>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> What do you expect your dog to contribute to your life? For example, do you want a running and hiking buddy, or is your idea of exercise watching it on TV?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> If you are thinking of adopting a young dog, do you have the time and patience to work with the dog through its adolescence, taking house-breaking, chewing and energy-level into account? (Find more information on raising young dogs in this <Link to='https://www.petfinder.com/pet-adoption/dog-adoption/puppies-vs-senior-dog-adoption/'>Puppy Guide</Link>.)
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Have you considered your lifestyle carefully and determined whether a younger or older dog would be a better match for you?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Can you train and handle a dog with behavior issues or are you looking for an easy-going friend?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Do you need a dog who will be reliable with children or one you can take with you when you travel?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Do you want a dog who follows you all around the house or would you prefer a less clingy, more independent character?
                              </ListItems>
                            </ul>
                          </TabPanel>
                          <TabPanel value='2'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>Size Considerations:</h5>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> What size dog can your home accommodate?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Will you have enough room if your dog grows to be bigger than expected?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> What size dog would suit the other people who live in or visit your home regularly?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Do you have another dog to consider when choosing the size of your next dog?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> How big of a dog can you travel comfortably with?
                              </ListItems>
                            </ul>
                          </TabPanel>
                          <TabPanel value='3'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>Time Considerations:</h5>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Dogs need to be fed two to three times a day, more often in the case of puppies, and need a constant supply of fresh water.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A responsible dog parent should spend at least one hour per day giving direct attention to his or her dog. This may include training, exercising, grooming, and playing or, with cats, it may just be lap time on the couch. Dogs will need to be taken out to potty several times a day.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A dog with an abundance of energy needs more time to exercise and interactive toys to keep them entertained.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Dogs with long coats may need 20 minutes a day of grooming to prevent matting.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Dogs with certain medical conditions may need additional attention, including specifically timed injections in the case of diabetic animals.
                              </ListItems>
                            </ul>
                            <p className='px-4 mt-4'>Remember that adopted dogs may need additional bonding and reassurance time in the early weeks.</p>
                          </TabPanel>
                          <TabPanel value='4'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>Pet Costs:</h5>
                            <p className='px-4 mt-4 mb-2'>More likely than not, the adopting agency will charge a fee to help defray the cost of taking in homeless or lost animals. The adoption fee you pay will be a tiny fraction of the money you will spend over the life of your dog. You may need to pay for your adopted dog to be spayed or neutered before bringing him or her home. Some expenses are mandatory for all dogs, including:</p>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Food
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Routine veterinary care
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Licensing according to local regulations
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Collars, leashes, and identification tags
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Basic grooming equipment and supplies.
                              </ListItems>
                            </ul>
                            <p className='px-4 mt-4 mb-2'>Other expenditures may not be required but are highly recommended:</p>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Permanent identification, such as a microchip
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Training classes
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Additional grooming supplies or professional grooming (depending on your new dog's needs)
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A spare collar or leash
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A bed and toys
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A crate or carrier
                              </ListItems>
                            </ul>
                            <p className='px-4 mt-4 mb-2'>Unexpected Costs:</p>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Accidents and illness can result in costly emergency veterinary care.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Recovery tools for finding a missing dog can include posters and rewards.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A dog with special physical or behavioral challenges may require specialized professional support to overcome any obstacles these issues present.
                              </ListItems>
                            </ul>
                            <p className='px-4 mt-4'>For more on typical pet care costs visit <Link to='https://www.petfinder.com/after-pet-adoption/annual-dog-care-costs.html'> Annual Dog Care Costs</Link>.</p>
                          </TabPanel>
                          <TabPanel value='5'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>Shopping List:</h5>
                            <p className='px-4 mt-4'>It may be a good idea to wait until you select your new dog before you begin shopping for supplies. For example, some items, such as food and water bowls or collars and harnesses, depend upon the size of the dog you will be adopting.</p>
                            <p className='px-4 mt-4'>Also, be sure to find out which food your dog was eating in the shelter or foster home so that you can provide the same in the beginning, again to ease the transition. After the dog has settled in, talk with your veterinarian about switching to the food of your choice.</p>
                            <p className='px-4 mt-4 mb-2'>Once you’ve selected your dog, here’s a checklist of supplies you may need:</p>
                            <FormGroup class='list-group ps-1 pe-3'>
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Food and water bowls' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Food (canned and/or dry) Collar' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Four to six-foot leash' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='ID tag with your phone number' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Hard plastic carrier or foldable metal crate' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Dog bed' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Doggy shampoo and conditioner' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Nail clippers' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Canine toothbrush and toothpaste' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Brush or comb (depends on your pet’s coat length and type)' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Super-absorbent paper towels' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Sponge and scrub brush' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Non-toxic cleanser' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Enzymatic odor neutralizer' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Plastic poop baggies (biodegradable ones are best) or pooper scooper' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Absorbent house-training pads' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Variety of toys (a ball, rope, chew toy and puzzle toy are good starts)' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Variety of treats (such as small cookies, larger rawhides, etc.)' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='First-aid supplies' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Baby gate(s)' />
                            </FormGroup>
                          </TabPanel>
                        </CardBody>
                      </TabContext>
                    </Card>
                  </Col>
                  <Col md='6'>
                    <CardTitle tag='h4' className='text-center mb-3'>Cat Adoption</CardTitle>
                    <Card className='card-plain'>
                      <TabContext value={value}>
                        <CardHeader>
                          <CardTitle tag='h5'>
                            <TabList
                              onChange={handleChange}
                              aria-label='icon label tabs example'
                            >
                              <Tab icon={<PsychologyIcon />} label='CONSIDERATIONS' value='6' />
                              <Tab icon={<PetsIcon />} label='TIME' value='7' />
                              <Tab icon={<MoreTimeIcon />} label='COSTS' value='8' />
                              <Tab icon={<PaidIcon />} label='SHOPPING LIST' value='9' />
                            </TabList>
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <TabPanel value='6'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>
                              Considerations for Cat Adoption:
                            </h5>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> If you are thinking of adopting a young cat, do you have the time and patience to work with the pet through its adolescence, taking playing, training, and energy level into account?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Have you considered your lifestyle carefully and determined whether a younger or older cat would be a better match for you?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Can you train and handle a cat with behavior issues or are you looking for an easy-going friend?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Do you need a cat who will be reliable with children or one you can take with you when you travel?
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Do you want a cat who follows you all around the house or would you prefer a less clingy, more independent character?
                              </ListItems>
                            </ul>
                          </TabPanel>
                          <TabPanel value='7'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>Time Considerations:</h5>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Cats need to be fed once to twice a day, more often in the case of kittens and need a constant supply of fresh water.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A responsible pet parent should spend at least one hour per day giving direct attention to his or her cat. This may include training, exercising, grooming, and playing, or may just be lap time on the couch.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A cat with an abundance of energy needs more time to exercise and interactive toys to keep them entertained.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Cats with long coats need 20 minutes a day of grooming to prevent matting.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Cats with certain medical conditions may need additional attention, including specifically timed injections in the case of diabetic animals.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Remember that adopted cats may need additional bonding and reassurance time in the early weeks.
                              </ListItems>
                            </ul>
                          </TabPanel>
                          <TabPanel value='8'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>Pet Costs:</h5>
                            <p className='px-4 mt-4 mb-2'>More likely than not, the adopting agency will charge a fee to help defray the cost of taking in unwanted or lost animals. The adoption fee you pay will be a tiny fraction of the money you will spend over the life of your pet. You may need to pay for your adopted cat to be spayed or neutered before bringing him or her home. Some expenses are mandatory for all pets, including:</p>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Food
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Routine veterinary care
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Licensing according to local regulations
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Collars and identification tags
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Kitty litter and box
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Basic grooming equipment and supplies.
                              </ListItems>
                            </ul>
                            <p className='px-4 mt-4 mb-2'>Other expenditures may not be required but are highly recommended:</p>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Permanent identification, such as a microchip
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Additional grooming supplies or professional grooming (depending on your new pet’s needs)
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A spare collar
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A bed and toys
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A crate or carrier
                              </ListItems>
                            </ul>
                            <p className='px-4 mt-4 mb-2'>Unexpected Costs:</p>
                            <ul class='list-group ps-1 pe-3'>
                              <ListItems>
                                <PawIcon /> Accidents and illness can result in costly emergency veterinary care.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> Recovery tools for finding a missing pet can include posters and rewards.
                              </ListItems>
                              <ListItems>
                                <PawIcon /> A cat with special physical or behavioral challenges may require specialized professional support to overcome any obstacles these issues present.
                              </ListItems>
                            </ul>
                            <p className='px-4 mt-4'>For more on typical cat care costs, visit <Link to='https://www.petfinder.com/after-pet-adoption/annual-cat-care-costs.html'> Annual Cat Care Costs</Link>.</p>
                          </TabPanel>
                          <TabPanel value='9'>
                            <h5 className='mb-3 fw-bold' style={{ paddingLeft: '22px' }}>Shopping List:</h5>
                            <p className='px-4 mt-4'>It may be a good idea to wait until you select your new cat before you begin shopping for supplies. For example, some items, such as food and water bowls or collars and harnesses, depend upon the size of the cat you will be adopting.</p>
                            <p className='px-4 mt-4'>Also, be sure to find out which food your pet was eating in the shelter or foster home so that you can provide the same in the beginning, again to ease the transition. After the pet has settled in, talk with your veterinarian about switching to the food of your choice.</p>
                            <p className='px-4 mt-4 mb-2'>Once you’ve selected your pet, here’s a checklist of supplies you may need:</p>
                            <FormGroup class='list-group ps-1 pe-3'>
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Food and water bowls' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Food (canned and/or dry)' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Litter box and scooper' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Kitty litter' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Collar' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='ID tag with your phone number' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Hard plastic carrier or foldable metal crate' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Cat bed' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Nail clippers' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Feline toothbrush and toothpaste' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Brush or comb (depends on your cat’s coat length and type)' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Super-absorbent paper towels' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Sponge and scrub brush' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Non-toxic cleanser' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Enzymatic odor neutralizer' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='Variety of toys (toys including catnip are a favorite)' />
                              <CheckboxLabel
                                control={<ColoredCheckbox />}
                                label='First-aid supplies' />
                            </FormGroup>
                          </TabPanel>
                        </CardBody>
                      </TabContext>
                    </Card>
                  </Col>
                </Row>
                <Card>
                  <CardBody>
                    <div className='places-buttons'>
                      <Row>
                        <Col className='ml-auto mr-auto text-center mb-3 mt-2' md='12'>
                          <CardTitle tag='h5'>For More Resources on Pet Adoption</CardTitle>
                        </Col>
                      </Row>
                      <Row>
                        <Col className='ml-auto mr-auto' lg='12'>
                          <Row className='p-3 px-5'>
                            <ul class='list-group'>
                              <ListItems>
                                <PawIcon />
                                <Link size='small' className='bg-transparent px-0'
                                  href='https://www.petfinder.com/pet-adoption/pet-adoption-information/' target='_blank'>
                                  Petfinder - Pet Adoption Information
                                </Link>
                              </ListItems>
                              <ListItems>
                                <PawIcon />
                                <Link size='small' className='bg-transparent px-0'
                                  href='https://www.petfinder.com/pet-adoption/pet-adoption-information/misconceptions-pet-adoption/' target='_blank'>
                                  Misconceptions About Pet Adoption
                                </Link>
                              </ListItems>
                              <ListItems>
                                <PawIcon />
                                <Link size='small' className='bg-transparent px-0'
                                  href='https://www.humanesociety.org/resources/adopting-animal-shelter-or-rescue-group' target='_blank'>
                                  The Humane Society
                                </Link>
                              </ListItems>
                              <ListItems>
                                <PawIcon />
                                <Link size='small' className='bg-transparent px-0'
                                  href='https://theshelterpetproject.org/why-adopt/' target='_blank'>
                                  The Shelter Pet Project
                                </Link>
                              </ListItems>
                              <ListItems>
                                <PawIcon />
                                <Link size='small' className='bg-transparent px-0'
                                  href='https://www.aspca.org/adopt-pet/adoption-tips' target='_blank'>
                                  The American Society for the Prevention of Cruelty to Animals® (ASPCA®)
                                </Link>
                              </ListItems>
                              <ListItems>
                                <PawIcon />
                                <Link size='small' className='bg-transparent px-0'
                                  href='https://animalfoundation.com/adopt-a-pet/adoption-info-faqs' target='_blank'>
                                  The Animal Foundation
                                </Link>
                              </ListItems>
                            </ul>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
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

export default Checklist