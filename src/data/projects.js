// greenhouse automation
import ghCover from "../assets/projects/greenhouse-automation/cover.png";
import gh1 from "../assets/projects/greenhouse-automation/greenhouse-automation-1.png";
import gh2 from "../assets/projects/greenhouse-automation/greenhouse-automation-2.png";
import gh3 from "../assets/projects/greenhouse-automation/greenhouse-automation-3.png";

// automate printer tag
import ptCover from "../assets/projects/automate-printertag/cover.png";
import pt1 from "../assets/projects/automate-printertag/automate-printertag-1.png";
import pt2 from "../assets/projects/automate-printertag/automate-printertag-2.png";
import pt3 from "../assets/projects/automate-printertag/automate-printertag-3.png";


// electrical CAD
import ecCover from "../assets/projects/electrical-cad/cover.png";
import ec1 from "../assets/projects/electrical-cad/electrical-cad-1.png";

// robot event
import reCover from "../assets/projects/robot-event/cover.png";
import re1 from "../assets/projects/robot-event/robot-event-1.png";

// commissioning machine
import cmCover from "../assets/projects/commissioning-machine/cover.png";
import cm1 from "../assets/projects/commissioning-machine/commissioning-machine-1.png";
import cm2 from "../assets/projects/commissioning-machine/commissioning-machine-2.png";
import cm3 from "../assets/projects/commissioning-machine/commissioning-machine-3.png";

export const projects = [
  {
    id: "greenhouse-automation",
    title: "Greenhouse Automation",
    year: "2024-2025",
    cover: ghCover,
    images: [gh1, gh2, gh3],
    description: [
      "This project is my final assignment in college. With a focus on the qualitative approach desired by the client, the project was successfully completed for application in small-scale industrial production, in accordance with the size of the greenhouse used.",
      "The results of this project show that the water content in the samples can be reduced more than with the use of a conventional greenhouse alone. The design, construction, and implementation of the mechanical sector as well as the control and monitoring program were carried out by me under the guidance of my lecturer. This tool is also a modification of a small-scale conventional dryer that has been repurposed as a greenhouse heater. Fuzzy control is applied to regulate the required heat output and the direction of airflow to control the humidity in the room.",
      "Further text can be seen at https://repositori.polman-bandung.ac.id/id/eprint/356/",
    ],
  },
  {
    id: "automate-printertag",
    title: "Automated Printer Tag",
    year: "2025",
    cover: ptCover,
    images: [pt1, pt2, pt3],
    description: [
      "The automatic printer tag is a client request to add a IoT function that can automatically tag processed items on several tables in the installed machine. This project is a mock-up as a preliminary step before transferring the work to the vendor who has accepted this job.",
      "This automatic control runs linearly, where data input is generateds from reading the rotary encoder and data input in the HMI, which is then triggered by a button so that the PLC can send data to the database via LAN, which will activate PHP on the PC to process the printer. Automatic data processing is also carried out on the PLC and MySQL according to the client's wishes.",
    ],
  },
  {
    id: "commissioning-machine",
    title: "Machine Commissioning",
    year: "2025",
    cover: cmCover,
    images: [cm1, cm2, cm3],
    description: [
      "This project is a freelance job from PT Dan Surya Persada for a client from PT Surya Rubberindo Industries. The work includes the installation process of all components and power from the main high voltage source panel. The work was carried out collaboratively between the mechanical and electrical teams in accordance with the client's targets and requirements.",
      "I did this work starting from the commissioning stage, then the modification and safety check period, which ended with the warranty period. For the new machine, the installation went smoothly and only required minor modifications to improve machine safety in accordance with the client company's regulations. For the old machine, troubleshooting was also required to reactivate all features that had been disabled for a long time. Additional modifications were also made for machine functionality and safety. At the end of this project, IoT work was carried out for the automatic printer tag",
    ],
  },
  {
    id: "electrical-cad",
    title: "Electrical CAD Design",
    year: "2023",
    cover: ecCover,
    images: [ec1],
    description: [
      "This electrical CAD work was a drafting job I did during my internship at PT Lucky Light Globalindo. The job was the first step in the technical director's transition from drawings that required many sheets to just one sheet for transformer accessories.",
      " This work required researching and understanding the components to be used and their wiring paths to improve visibility. I began this work by creating detailed CAD drawings of the components and discussing the components to be used with my supervisor. After completing four transformers, the work was handed over to other employees, and I moved on to other tasks.",
    ],
  },
  {
    id: "robot-event",
    title: "Robotics Event Project",
    year: "2022",
    cover: reCover,
    images: [re1],
    description: [
      "This project was carried out while participating in Student Activity Unit (RESP) activities during my studies for the 2022 KRSRI competition. At that time, I was a member of the mechanical team working on the design, construction, and mechanical motion development. This work was carried out together with the mechanical team and in collaboration with the electrical and programming teams.",
      "During the process, I was required to modify several parts to accommodate the installation of new sensors. Repairs to the robot's motion components were also necessary because the mechanical components had not been in use for a year, resulting in smoother movement of the robot's six legs.",
    ],
  },

];
