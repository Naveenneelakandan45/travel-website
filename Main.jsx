import React,{useEffect} from 'react'
import './Main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import img from '../../Components/img11.jpg'
import img1 from '../../Components/img22.jpg'
import img2 from '../../Components/img33.jpg'
import img3 from '../../Components/img44.jpg'
import img4 from '../../Components/img55.jpg'
import img5 from '../../Components/img66.jpg'
import img6 from '../../Components/img77.jpg'
import img7 from '../../Components/img88.jpg'
import img8 from '../..//Components/img99.jpg'
import { LuClipboardCheck } from "react-icons/lu";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees:' $700',
    description: 'The epitome of romance, Bora Bora is one of the best Travel destination in the World. This place is Known for its  luxurious stays and adventurous activities.',
  },
 
  {
    id:2,
    imgSrc: img1,
    destTitle: 'Machu picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees:' $600',
    description:'Huayna picchu is a mountain in Peru, rising over Machu Picchu,the so called Lost City of Incas. This place is popular among tourists as the sunnrise from the sun Gate is simply spectacular.',
  },

  {
    id:3,
    imgSrc: img2,
    destTitle: 'Great Barrier Reef',
    location: 'Australia ',
    grade: 'CULTURAL RELAX',
    fees:' $700',
    description:'One of The most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is Lavish and beauty. Always intresting to be in this place.',
  },

  {
    id:4,
    imgSrc: img3,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees:' $800',
    description:'According to the world Tourism Ranking. 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is Known for its luxurious stays and adventurous activities.',
  },

  {
    id:5,
    imgSrc: img4,
    destTitle: 'Guanajuato',
    location: 'Maxico',
    grade: 'CULTURAL RELAX',
    fees:' $1100',
    description:'A city in central Maxico, Guanajuato is Known for its history of silver mining and colonial  architecture. The houses in the city are very attractively painted with the most bright colors available. Always Welcome.',

  },

  {
    id:6,
    imgSrc: img5,
    destTitle: 'Cinque terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees:' $840',
    description:'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!',
  },

  {
    id:7,
    imgSrc: img6,
    destTitle: 'Angkoe Wat ',
    location: 'Cambodia ',
    grade: 'CULTURAL RELAX',
    fees:' $790',
    description:'Angkot wat represents the entire range of khmer are from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is Known for its luxurious stays and adventurous activities.',

  },

  {
    id:8,
    imgSrc: img7,
    destTitle: 'Taj Mahal ',
    location: 'India ',
    grade: 'CULTURAL RELAX',
    fees:' $900',
    description:'An immense of white marble, built-in Agra by Mughhal emperor Shah jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. THis place is known for its luxurious stays and adventurous activities.',

  },

  {
  
    id:9,
    imgSrc: img8,
    destTitle: 'Bali Island ',
    location: 'Indonesia ',
    grade: 'CULTURAL RELAX',
    fees:' $500',
    description:'Bali is an Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bail is known for its volcanic mountains, history, art & culture, food, temples and beautyful sandy beaches.',
  }, 
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos='fade-right'
      className="title">
        Most Visited destinations
      </h3>
    </div>

    <div className="secContent grid">
     {
      Data.map(({id, imgSrc ,destTitle,location,grade,fees,description})=>{
         return (
          <div key={id} data-Aos='fade-up'
           className="singleDestination">
             <div className="imageDiv">
             <img src={imgSrc} alt={destTitle} />
            


             </div>
             <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}  </h4>
                    <span className="contient flex">
                    <HiOutlineLocationMarker className='icon2'/>
                    <span className="name">{location}</span>
                    </span>
                 <div className="fees flex">
                  <div className="grad">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                        <h5>{fees}</h5>
                  </div>
                 </div>
                 <div className="desc">
                  <p>{description}</p>
                 </div>
                 <button className="btn flex">
                  DETAILS <LuClipboardCheck className='icon3' />
                 </button>
             </div>
          </div>
         )
      })
     }

    </div>
   </section>
  )
}




export default Main