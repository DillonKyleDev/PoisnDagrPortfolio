import React, { useEffect, useState } from 'react'
import './css/drawimages.css'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const adultImages = [
  {
    downscaled: "./assets/downscaled/18plus/Ghoul.png",
    fullsize: "./assets/18plus/Ghoul.png",
    title: "Ghoul"
  },
  {
    downscaled: "./assets/downscaled/18plus/Green.png",
    fullsize: "./assets/18plus/Green.png",
    title: "Green"
  },
  {
    downscaled: "./assets/downscaled/18plus/Pink.png",
    fullsize: "./assets/18plus/Pink.png",
    title: "Pink"
  },
  {
    downscaled: "./assets/downscaled/18plus/Rendering.png",
    fullsize: "./assets/18plus/Rendering.png",
    title: "Rendering"
  },
  {
    downscaled: "./assets/downscaled/18plus/BotStuff.png",
    fullsize: "./assets/18plus/BotStuff.png",
    title: "Bot Stuff"
  },
  {
    downscaled: "./assets/downscaled/18plus/CounterCulture.png",
    fullsize: "./assets/18plus/CounterCulture.png",
    title: "Counter Culture"
  },
  {
    downscaled: "./assets/downscaled/18plus/Lightbulb.png",
    fullsize: "./assets/18plus/Lightbulb.png",
    title: "Lightbulb"
  },
  {
    downscaled: "./assets/downscaled/18plus/Strings.png",
    fullsize: "./assets/18plus/Strings.png",
    title: "Strings"
  }
]

const regularImages = [
  {
    downscaled: "./assets/downscaled/fullColor/Witchy.png",
    fullsize: "./assets/fullColor/Witchy.png",
    title: "Witchy"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Wisper.png",
    fullsize: "./assets/fullColor/Wisper.png",
    title: "Wisper"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Vault.png",
    fullsize: "./assets/fullColor/Vault.png",
    title: "Vault"
  },
  {
    downscaled: "./assets/downscaled/fullColor/WizardOrSomething.png",
    fullsize: "./assets/fullColor/WizardOrSomething.png",
    title: "Wizard"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Pinky.png",
    fullsize: "./assets/fullColor/Pinky.png",
    title: "Pinky"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Oceanside.jpg",
    fullsize: "./assets/fullColor/Oceanside.jpg",
    title: "Oceanside"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Rabbit.png",
    fullsize: "./assets/fullColor/Rabbit.png",
    title: "Rabbit"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Haruko.png",
    fullsize: "./assets/fullColor/Haruko.png",
    title: "Haruko"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Bust.png",
    fullsize: "./assets/fullColor/Bust.png",
    title: "Bust"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Bakugomin.png",
    fullsize: "./assets/fullColor/Bakugomin.png",
    title: "Bakugomin"
  },
  {
    downscaled: "./assets/downscaled/fullColor/DesertViper.png",
    fullsize: "./assets/fullColor/DesertViper.png",
    title: "Desert Viper"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Golempac.png",
    fullsize: "./assets/fullColor/Golempac.png",
    title: "Golempac"
  },
  {
    downscaled: "./assets/downscaled/fullColor/StoneGolem.png",
    fullsize: "./assets/fullColor/StoneGolem.png",
    title: "Stone Golem"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Mobster.png",
    fullsize: "./assets/fullColor/Mobster.png",
    title: "Mobster"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Itstdy2.png",
    fullsize: "./assets/fullColor/Itstdy2.png",
    title: "Itstdy2"
  },
  {
    downscaled: "./assets/downscaled/fullColor/AngryBall.png",
    fullsize: "./assets/fullColor/AngryBall.png",
    title: "Angry Ball"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Swamp.png",
    fullsize: "./assets/fullColor/Swamp.png",
    title: "Swamp"
  },
  {
    downscaled: "./assets/downscaled/fullColor/3Bulky.png",
    fullsize: "./assets/fullColor/3Bulky.png",
    title: "3Bulky"
  },
      {
    downscaled: "./assets/downscaled/fullColor/goblinfisher.png",
    fullsize: "./assets/fullColor/goblinfisher.png",
    title: "Goblin Fisher"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Himiko.png",
    fullsize: "./assets/fullColor/Himiko.png",
    title: "Himiko"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Mousekateer.png",
    fullsize: "./assets/fullColor/Mousekateer.png",
    title: "Mousekateer"
  },
  {
    downscaled: "./assets/downscaled/fullColor/ShyGirl.png",
    fullsize: "./assets/fullColor/ShyGirl.png",
    title: "ShyGirl"
  },
  {
    downscaled: "./assets/downscaled/fullColor/SwampWizard.png",
    fullsize: "./assets/fullColor/SwampWizard.png",
    title: "Swamp Wizard"
  },
  {
    downscaled: "./assets/downscaled/fullColor/Thing.png",
    fullsize: "./assets/fullColor/Thing.png",
    title: "Thing"
  },
  {
    downscaled: "./assets/downscaled/fullColor/VillianCAtest.png",
    fullsize: "./assets/fullColor/VillianCAtest.png",
    title: "VillianCAtest"
  },
  {
    downscaled: "./assets/downscaled/flats/Axe.png",
    fullsize: "./assets/flats/Axe.png",
    title: "Flat_1"
  },
  {
    downscaled: "./assets/downscaled/flats/DnDCharacter.png",
    fullsize: "./assets/flats/DnDCharacter.png",
    title: "Flat_2"
  },
  {
    downscaled: "./assets/downscaled/flats/Fern.jpg",
    fullsize: "./assets/flats/Fern.jpg",
    title: "Flat_3"
  },
  {
    downscaled: "./assets/downscaled/flats/Fishstronaut.png",
    fullsize: "./assets/flats/Fishstronaut.png",
    title: "Flat_4"
  },
]

function DrawImages(props) {
  const { showAdultGallery } = props;
  const [ showModal, setShowModal ] = useState(false);
  const [ showWarning, setShowWarning ] = useState( false );
  const [ imageSettings, setImageSettings ] = useState({
    url: './assets/fullColor/goblinfisher.png',
    name: ''
  })
  const [ imageData, setImageData ] = useState([ ]);


  //Add images to the screen
  useEffect(() => {
    //set initial blur if necessary
    if(showAdultGallery) {
      setShowWarning(true);
      document.querySelector(".restricted").classList.add('hide-content');
      document.querySelector(".blurred-screen").classList.remove('hide-content');
    } else {
      setImageData(regularImages);
      document.querySelector(".restricted").classList.remove('hide-content');
      document.querySelector(".blurred-screen").classList.add('hide-content');
    }
  }, [ showAdultGallery ] );

  useEffect(() => {
    if(showWarning) {
      setImageData(adultImages);
    }
  }, [ setShowWarning, showWarning ]);

  //Add events to image thumbnails
  useEffect(() => {
    let thumbnails = document.getElementsByClassName("thumbnail");

    for(let i = 0; i < thumbnails.length; i++) {
      //event for mouseover to enlarge image
      thumbnails[i].addEventListener('mouseover', (e) => {
        e.target.parentElement.style.height = e.target.offsetHeight + 'px';
        e.target.parentElement.style.zIndex = '2';
      });
      //event for mouse leave to return to normal
      thumbnails[i].addEventListener('mouseout', (e) => {
        e.target.parentElement.style.height = 270 + 'px';
        e.target.parentElement.style.zIndex = '0';
      });
    }
  }, [ imageData ] );


  useEffect(() => {
    if(imageSettings.name !== '') {
      setShowModal(true);
    }
  }, [ imageSettings ]);


  //remove blur effect and show restricted content on age verification
  useEffect(() => {
    if(!showWarning) {
      document.querySelector(".restricted").classList.remove('hide-content');
      document.querySelector(".blurred-screen").classList.add('hide-content');
    } else {
      document.querySelector(".restricted").classList.add('hide-content');
      document.querySelector(".blurred-screen").classList.remove('hide-content');
    }
  }, [ showWarning ]);


  let ageVerifyModal = 
    <Modal        
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show={showWarning}>
      <Modal.Header className='bg-dark'>
        <Modal.Title className='text-light'>
          Restricted Content  
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="margin-L bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4 className="text-centered">Please verify you are at least 18 years of age.</h4>
        <div className='text-centered mt-5'>
        <Button className="violet-button mx-1" onClick={() => setShowWarning(false)}>Confirm 18+</Button>
        <Link variant='danger mx-1' className='btn btn-danger' onClick={() => setShowWarning(false)} to="/">Go Back</Link>
        </div>
      </Modal.Body>
    </Modal>


  return (
    <div>
      <div className='restricted hide-content'>
        <Container fluid>
          <Row className="d-flex justify-content-center padding-y">
            {
              imageData.map((image, index) => (
              <Col  key={index} xs="auto"  className='collage-col mt-4 fixed-height'>
                <div className='image-shadow thumbnail'onClick={() => {setImageSettings({
                    url: image.fullsize,
                    name: image.title
                  })}}>
                  <img className="img img-fluid" src={require(`${image.downscaled}`).default} alt="Portfolio" />
                </div>
              </Col>))
            }
          </Row>
        </Container>

        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}>
          <Modal.Header closeButton onClick={() => setShowModal(false)}>
            <Modal.Title>{ imageSettings.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img id="image" src={require(`${imageSettings.url}`).default} alt="Enlarged" style={{width: 100 + '%'}}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className='blurred-screen hide-content'>
        { ageVerifyModal }
      </div>
    </div>
  )
}

export default DrawImages
