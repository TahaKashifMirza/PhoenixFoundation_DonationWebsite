import './CSS/About.css';
import { NavLink } from 'react-router-dom';

export const About = () => {
  return (
    <div className="about-us">
      <h1 className="about-main-heading">PHOENIX FOUNDATION</h1>
      <h2 className="about-slogan">Together, We Make A Difference</h2>
      <div className="about-content">
        <p className="about-description">
        The people of Gaza and Palestine are facing an unimaginable crisis. Years of conflict have left thousands homeless, without food, and living in constant fear. Children, who should be enjoying their childhood, are instead witnessing and experiencing the horrors of war. Every day, families are torn apart, homes are destroyed, and the basic necessities of life become increasingly scarce. The situation is dire—innocent lives are lost, and hope is dwindling. The resilience of the Palestinian people is truly remarkable, but the suffering they endure is beyond comprehension. Imagine a world where the sound of bombs replaces the laughter of children, and where the struggle for survival overshadows the simple joys of life.
          <img src="Images/slider1.jpg" alt="Gaza situation" className="about-image" />
          The relentless violence has turned Gaza into a humanitarian disaster zone. Hospitals are overwhelmed, and there is a severe shortage of medical supplies. The economic blockade has crippled livelihoods, and the people are struggling to find even a single meal a day. This ongoing tragedy calls for immediate and sustained support from the global community. The streets of Gaza echo with the cries for help, and the weight of despair is palpable. In a land where dreams are deferred, and every day is a fight for survival, the need for compassion and action has never been more urgent.
          <img src="Images/about2.jpeg" alt="Children in Palestine" className="about-image" />
          Every day is a battle for survival, and the toll on the human spirit is immeasurable. The resilience of the Palestinian people is truly inspiring, yet the suffering they endure is profound. Each story of loss is a stark reminder of the urgent need for humanitarian aid and international solidarity. Despite the darkness, there is a glimmer of hope—a hope that through our collective efforts, we can bring light to their lives. We cannot turn a blind eye to their plight; it is our moral duty to stand with them and provide the support they so desperately need.
          <img src="Images/about4.jpeg" alt="Destroyed buildings" className="about-image" />
          <img src="Images/slider2.jpg" alt="Destroyed buildings" className="about-image" />
        </p>
        <h1 className='about-h1'>How Our Foundation "PHOENIX FOUNDATION" Works:</h1>
        <p className="about-description">
        At <strong>PHOENIX FOUNDATION,</strong> we believe in making a tangible difference. Our donations directly support those in need, providing food, shelter, medical supplies, and other essentials to help them through these difficult times. We are committed to alleviating the suffering and restoring hope in these devastated communities. Our mission is to bring relief to those who are most vulnerable, to provide a beacon of hope amidst the darkness, and to show that compassion knows no borders.
          <img src="Images/about3.jpeg" alt="Phoenix Foundation helping" className="about-image" />
          <img src="Images/about1.jpeg" alt="Phoenix Foundation helping" className="about-image" />
          Our dedicated team works tirelessly on the ground, partnering with local organizations to ensure that aid reaches those who need it most. We believe in transparency and accountability, ensuring that every dollar donated is used efficiently to make the maximum impact. By supporting PHOENIX FOUNDATION, you are not just donating money; you are giving hope, security, and a chance for a better future to the people of Gaza and Palestine. Your contribution transforms lives, rekindles hope, and paves the way for a brighter, more peaceful tomorrow. Together, we can rebuild communities, restore faith, and renew the spirit of those who have been through unimaginable hardships.
        </p>
        <h1 className='about-h1'>CALL TO ACTION:</h1>
        <p className='about-description'>Together, we can make a significant difference. Join us in our mission to support the people of Gaza and Palestine in their time of need. Click the button below to donate and be a part of this critical humanitarian effort. Your generosity can turn despair into hope, and help us create a future where every child can dream again.</p>
        <NavLink to="/donation">
        <button className="about-donate-button"><strong>Donate Now</strong></button>
        </NavLink>
      </div>
    </div>
  );
};