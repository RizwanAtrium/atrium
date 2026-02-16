import { Lock } from "lucide-react";
import "./Benefits.css";
import ElectricBorder from "./ElectricBorder.jsx";

const APPLY_LINK =
  "https://docs.google.com/forms/u/0/d/1f3ANSC4xAdwBsEAvTAExZS1VVW-OOUBqEe7taON9WFM/viewform?edit_requested=true";
function Benefits() {
  return (
    <div className="benefits-wrapper">

    
     <div className="m-auto">
      
       <div className="top-cards">
        
        <div className="benefit-card">
          
        <div>
            <h4>Graphics Designer</h4>
          <p>Designers with style</p>
          </div>
           <a
             href={APPLY_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-ben-btn mt-4"
           >
             Apply Now
           </a>
        </div>
        <div className="benefit-card">
          <div>
          <h4>Video Editor</h4>
          <p>Editors with rhythm</p>
          </div>
           <a
             href={APPLY_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-ben-btn mt-4"
           >
             Apply Now
           </a>
        </div>
       
      </div>
      <div className="top-cards snd">
        <div className="benefit-card">
          <div>
          <h4>Sales Excutive</h4>
          <p>Sales with communication</p>
          </div>
           <a
             href={APPLY_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-ben-btn mt-4"
           >
             Apply Now
           </a>
        </div>
        <div className="benefit-card">
          <div>
          <h4>Chat Support </h4>
          <p>Support heroes</p>
          </div>
           <a
             href={APPLY_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-ben-btn mt-4"
           >
             Apply Now
           </a>
        </div>
        <div className="benefit-card">
          <div>
          <h4>Content Creater</h4>
          <p>Content with storytellers</p>
          </div>
           <a
             href={APPLY_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="contact-ben-btn mt-4"
           >
             Apply Now
           </a>
        </div>
      </div>

    
      <div className="blurred-cards">
        {[1,2,3,4].map((_, i) => (
          <div className="benefit-card locked" key={i}>
            
          
            <div className="card-content">
              <div>
              <h4>Locked Jobs</h4>
              <p>This job is locked</p>
              </div>
               <a
                 href={APPLY_LINK}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="contact-ben-btn mt-4"
               >
                 Apply Now
               </a>
            </div>

          
            <div className="lock-icon">
              <Lock size={28} />
            </div>

          </div>
        ))}
      </div>
     </div>

    </div>
  );
}

export default Benefits;
