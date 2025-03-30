import './Joinwithus.css';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const Joinwithus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div className={`join-container ${inView ? 'visible' : ''}`} ref={ref}>
      <h1 className="join-heading">JOIN WITH US</h1>
      <div className="join-content">
        <div className="join-text">
          <p>
            The people of Gaza, Palestine face extraordinary challenges, grappling with hardship and uncertainty. The ongoing conflict has left countless families in dire need, stripped of basic necessities, and clinging to hope for a better tomorrow. By creating this program, we aim to extend a helping hand, ensuring that your generous donations reach those who need them most. Your contributions provide essential resources—food, clean water, medical supplies, and shelter—offering a lifeline to families struggling to survive. Each donation represents a beacon of hope and solidarity, transforming lives and fostering resilience in a community that has endured unimaginable suffering. Your support is not just a gift; it is a message of compassion and a testament to the enduring human spirit.
          </p>
          <br />
          <p>
            The situation in Gaza and Palestine is heartbreaking, with children growing up amidst ruins and families torn apart by violence and loss. The lack of access to fundamental resources like healthcare, education, and safe living conditions has created a humanitarian crisis of staggering proportions. This program is more than just a donation platform; it is a bridge of empathy connecting you to the heart of this crisis. Through your kindness, we can provide immediate relief and long-term support to those affected. Imagine the profound impact of your generosity—bringing smiles to children's faces, restoring health to the ailing, and offering a sense of normalcy in a world turned upside down. Every contribution, no matter how small, reverberates through these communities, instilling hope and reaffirming their faith in humanity.
          </p>
          <br />
          <p>
            Your donations are a powerful testament to the global community's commitment to justice and peace. They offer a tangible way to alleviate suffering, restore dignity, and empower the people of Gaza and Palestine to rebuild their lives and look forward to a brighter future. As we stand in solidarity with them, we illuminate the path to recovery and resilience, proving that even in the darkest times, humanity shines through. Let us not be indifferent to their plight. Together, we can make a meaningful difference, ensuring that every act of kindness contributes to a world where compassion triumphs over adversity. Join us in this mission to bring light to the shadows and hope to the hearts of those who need it most.
          </p>
        </div>
        <div className="join-image-container">
          <img src="Images/joinwithus.jpeg" alt="Hope and solidarity" className="join-image" />
        </div>
      </div>
    </div>
  );
};