

import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import codingClass from "/coding-class1.jpg"
import arduino from "/arduino.jpg"
import icon75 from "/icon75arduino.svg"

export default function SummerCampPage() {

    useEffect(() => {
        document.title = 'Summer Camp | Vision Coding';
    }, []);

    $(function () {
        window.sr = ScrollReveal();
        if ($(window).width() < 768) {
            if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            }
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        else {
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInBottom', {
                origin: 'bottom',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInTop', {
                origin: 'top',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    });

    return (
        <>
            <section className="summercamp  overflow-x-hidden">
                <h1 className="md:hidden timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Vision Coding Summer
                    Camp 2024
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl pb-3">Vision
                    Coding
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Summer Camp
                    2024
                </h1>
                <p className="hidden md:block timeline-content js--fadeInRight text-2xl pt-5 md:pt-10">Explore exciting <span
                    className="text-yellow-200 font-bold">IT Technology</span> and
                    participate in <span className="text-yellow-200 font-bold">fun and entertaining activities</span> this
                    summer!
                </p>
            </section>
            <section className="summercamp2 overflow-x-hidden">
                <h1 className="md:hidden timeline-content js--fadeInRight text-center text-5xl md:text-8xl">Robotics
                    (Arduino) and STEM
                </h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl pb-3">Robotics
                    (Arduino) and STEM</h1>
                <h1 className="hidden md:block timeline-content js--fadeInRight text-center text-5xl md:text-8xl">for G1-3
                    Students</h1>
                <p className="hidden md:block timeline-content js--fadeInRight text-2xl pt-5 md:pt-10">12-Week Program</p>
                <p
                    className="z-10 my-10 px-10 py-5 bg-red-500 rounded-xl text-white flex flex-col mx-auto hover:cursor-pointer hover:bg-red-400 transition all-ease duration-300">
                    Apply Now
                </p>
            </section>
            <main className="flex-1 mx-auto px-2 py-20 md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] overflow-x-hidden">
                <h2
                    className="timeline-content js--fadeInRight text-4xl md:text-6xl max-w-[1000px] mx-auto text-center text-yellow-200">
                    Program Overview</h2>
                <div className="static py-5 md:py-20">
                    <img src={codingClass} alt="Coding Class"
                        className="timeline-content js--fadeInRight md:max-w-[500px] rounded-xl border-white border-4 float-left md:mr-5" />
                    <div className="relative top-0 left-0">
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">The 12-Week Robotics (Arduino)
                            and STEM Curriculum for G1-3 Students is a comprehensive program designed to introduce young
                            learners to the world of programming, robotics, and STEM through hands-on projects and
                            activities. Using Arduino boards and various components, students will explore fundamental
                            concepts in programming, circuitry, robotics, and STEM, developing essential skills in
                            problem-solving, critical thinking, and creativity</p>
                    </div>
                </div>
                <h2
                    className="timeline-content js--fadeInRight text-4xl md:text-6xl md:pt-20 max-w-[1000px] mx-auto text-center text-yellow-200">
                    Program Objectives</h2>
                <div className="static py-5 md:py-20">
                    <img src={arduino} alt="Coding Class"
                        className="timeline-content js--fadeInLeft md:max-w-[500px] rounded-xl border-white border-4 float-right md:mr-5" />
                    <div className="relative top-0 left-0">
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">Introduce students to the
                            basics of robotics using Arduino</p>
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">Integrate STEM concepts
                            through experiments and projects that connect science, technology, engineering, and mathematics.
                        </p>
                        <p className="timeline-content js--fadeInRight pb-10 text-lg md:text-2xl">Foster problem-solving skills
                            through hands-on projects and activities.</p>
                        <p className="timeline-content js--fadeInRight text-lg md:text-2xl">Encourage creativity and engagement
                            through project-based learning</p>
                        <p className="timeline-content js--fadeInRight text-lg md:text-2xl">Develop essential skills in project
                            planning, execution, and presentation</p>
                    </div>
                </div>
                <button
                    className="z-10 my-10 px-10 py-5 bg-red-500 rounded-xl text-2xl text-white flex flex-col mx-auto hover:cursor-pointer hover:bg-red-400 transition all-ease duration-300">
                    Apply Now
                </button>
                <h2
                    className="timeline-content js--fadeInRight text-4xl md:text-6xl md:py-20 max-w-[1000px] mx-auto text-center text-yellow-200">
                    Curriculum</h2>
                <div
                    className="bg-white text-black px-10 py-10 mt-5 md:mt-0 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 1: Course Overview and Introduction to Arduino
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Introduction to Arduino </h4>
                    <p className="text-sm md:text-lg">Introduction to Arduino and basic components.</p>
                    <p className="text-sm md:text-lg">Explanation of what an LED is. </p>
                    <p className="text-sm md:text-lg">Basic safety rules. </p>
                    <p className="text-sm md:text-lg">Setting up the Arduino board.</p>
                    <p className="text-sm md:text-lg">Writing the first program to blink an LED.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Virtual Reality (VR)
                    </h4>
                    <p className="text-sm md:text-lg">Explore the world of VR </p>
                    <p className="text-sm md:text-lg">Get hands-on experience with VR and robotics </p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 2: Understanding Basic Circuits and Block Coding
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Understanding Basic Circuits</h4>
                    <p className="text-sm md:text-lg">Basic concepts of circuits</p>
                    <p className="text-sm md:text-lg">Connecting an LED to Arduino</p>
                    <p className="text-sm md:text-lg">Writing a simple program to turn the LED on and off.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Block Coding (Scratch) </h4>
                    <p className="text-sm md:text-lg">Class Activity: Introduce Scratch and basic block coding concepts.</p>
                    <p className="text-sm md:text-lg">Home Project: Follow the attached guide and create a simple animation
                        using Scratch. Supervised by parents. (45 Minutes)</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 3: Controlling LED with Code</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Controlling LED with Code</h4>
                    <p className="text-sm md:text-lg">Using digital pins on Arduino</p>
                    <p className="text-sm md:text-lg">Writing code to control the LED</p>
                    <p className="text-sm md:text-lg">Introduction to basic coding concepts.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Plant Growth Basics </h4>
                    <p className="text-sm md:text-lg">Class Activity: Discuss the basic needs of plants for growth (light,
                        water, soil, etc.) Share your illustrated guide with the class.</p>
                    <p className="text-sm md:text-lg">Experiment: Plant seeds with the terrarium kit.</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 4: Using a Button to Control LED and Buoyancy
                        Basics</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Using a Button to Control LED</h4>
                    <p className="text-sm md:text-lg"> Introduction to buttons and switches</p>
                    <p className="text-sm md:text-lg">Connecting a button to Arduino</p>
                    <p className="text-sm md:text-lg">Writing code to turn the LED on and off with a button press.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Buoyancy Basics</h4>
                    <p className="text-sm md:text-lg">Activity: Experiment with objects that float and sink, discussing density
                        and buoyancy.</p>
                    <p className="text-sm md:text-lg">Home Research: </p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 5: Understanding the While Loop and Building a
                        Water Rocket</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Understanding the While Loop </h4>
                    <p className="text-sm md:text-lg">Introduction to loops in programming.</p>
                    <p className="text-sm md:text-lg">Writing a simple while loop.</p>
                    <p className="text-sm md:text-lg">Using the while loop to blink an LED continuously.</p>
                    <p className="text-sm md:text-lg">Setting up the Arduino board.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Building a Water Rocket [ 2 Weeks ]</h4>
                    <p className="text-sm md:text-lg">Activity: Discuss the principles of pressure and propulsion. Build a
                        simple water rocket,</p>
                    <p className="text-sm md:text-lg">Home Project:</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 6: LED Sequence with While Loop and Water
                        Science</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: LED Sequence with While Loop</h4>
                    <p className="text-sm md:text-lg">Creating a sequence of LED blinks. </p>
                    <p className="text-sm md:text-lg">Writing a program using the while loop to create a light sequence. </p>
                    <p className="text-sm md:text-lg">Understanding the delay function.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Building a Water Rocket [ 2 Weeks ]</h4>
                    <p className="text-sm md:text-lg">Activity: Finish building the water rocket and launch it! Boom!</p>
                    <p className="text-sm md:text-lg">Home Project: Design different fins or nose cones to see how they affect the flight of the rocket</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 7: Advanced LED Control and Engineering Basics
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Advanced LED Control</h4>
                    <p className="text-sm md:text-lg">Combining buttons and while loops.</p>
                    <p className="text-sm md:text-lg">Writing a program to control LED sequences with button presses.</p>
                    <p className="text-sm md:text-lg">Introduction to more complex code structures.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Engineering Basics - Bridge [ Team Project ]
                    </h4>
                    <p className="text-sm md:text-lg">Activity: Introduction to simple weight structures - demonstration on different weight structures.</p>
                    <p className="text-sm md:text-lg">Home Project: Team of 2 or 3 students brainstorm and build the strongest bridge using only spaghetti noodles and tape</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 8: Introduction to Seven-Segment Display and
                        Math Magic</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Introduction to Seven-Segment Display</h4>
                    <p className="text-sm md:text-lg">Explanation of a seven-segment display.</p>
                    <p className="text-sm md:text-lg">Connecting a seven-segment display to Arduino. </p>
                    <p className="text-sm md:text-lg">Writing code to display numbers on the seven-segment display.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Engineering Basics - Bridge [ Team Project ]
                    </h4>
                    <p className="text-sm md:text-lg">Activity: Competition day! Whose team built the strongest bridge?</p>
                    <p className="text-sm md:text-lg">Home Project: </p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 9: Controlling Seven-Segment Display and Water
                        Filtration</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Controlling Seven-Segment Display</h4>
                    <p className="text-sm md:text-lg">Writing more advanced code for the seven-segment display.</p>
                    <p className="text-sm md:text-lg">Displaying multiple numbers.</p>
                    <p className="text-sm md:text-lg">Introduction to functions in Arduino code.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Water Filtration [Team Project] </h4>
                    <p className="text-sm md:text-lg">Activity: Learn about water filtration - how does it work? Why do we need
                        to filter water? What’s inside the water?</p>
                    <p className="text-sm md:text-lg">In Class Project: In groups of 2 or 3 students, build and test water
                        filters. Observe, compare and experiment with different materials.</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 10: Planning the Project and Exploring Gravity
                    </h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Planning the Project</h4>
                    <p className="text-sm md:text-lg">Introduction to the project: Explain the goal and the components needed.
                    </p>
                    <p className="text-sm md:text-lg">Understanding the seven-segment display: Detailed explanation of how the
                        seven-segment display works and how to control it with Arduino.</p>
                    <p className="text-sm md:text-lg">Sketching the circuit: Draw a simple schematic of how the components will
                        be connected.</p>
                    <p className="text-sm md:text-lg">Breakdown of the steps: Divide the project into manageable parts (e.g.,
                        connecting the display, writing the code to control the display, adding button functionality).</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Exploring Gravity</h4>
                    <p className="text-sm md:text-lg">Activity: : Build and test a parachute for a small toy using household
                        materials</p>
                    <p className="text-sm md:text-lg">Home Project: Think back on all of the experiments we did so far, what was
                        the project that intrigued you the most? What are some changes you can make to the experiment to get
                        a different result?</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 11: Building the Project and Preparing for the
                        Science Fair</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Building the Project</h4>
                    <p className="text-sm md:text-lg">Connecting the Seven-Segment Display: Connect the display to the Arduino,
                        ensuring each segment is connected to the appropriate pin. Use resistors to limit the current to the
                        display.</p>
                    <p className="text-sm md:text-lg">Programming the Display: Write a basic Arduino program to display a single
                        digit on the seven-segment display. Expand the code to display a countdown from a preset value
                        (e.g., 10 to 0).</p>
                    <p className="text-sm md:text-lg">Adding Button Functionality: Connect the start, pause, and reset buttons
                        to the Arduino. Write code to handle button presses, starting, pausing, and resetting the countdown.
                    </p>
                    <p className="text-sm md:text-lg">Testing and Debugging: Test the circuit and the code to ensure the
                        countdown timer works correctly. Debug any issues that arise and refine the code as needed</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Mini Science Fair Preparation</h4>
                    <p className="text-sm md:text-lg">Activity: Select a topic we learned and develop an experiment. Review
                        topics covered in class (e.g., plant growth, buoyancy, water filtration). Help students select a
                        topic that interests them. Guide students through the scientific method</p>
                    <p className="text-sm md:text-lg">Home Project: Continue working on their experiments at home. Gather
                        materials needed for their experiments. Perform experiments and record the experiment. Create a
                        simple display board summarizing their project (introduction, materials, procedure, results,
                        conclusion)</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <div
                    className="bg-white text-black px-10 py-10 my-10 rounded-xl shadow-2xl shadow-white mx-5 md:mx-auto md:w-[600px]">
                    <h3 className="text-xl text-red-400 font-bold md:pb-5">Week 12: Finalizing and Presenting the Project and
                        Science Fair Presentation</h3>
                    <h4 className="text-lg font-bold py-2 md:py-4">Arduino Project: Finalizing and Presenting the Project</h4>
                    <p className="text-sm md:text-lg">Final Testing: Ensure the project works as intended with all components.
                    </p>
                    <p className="text-sm md:text-lg">Decorating the Project: Allow students to decorate their project boards or
                        cases for a personalized touch.</p>
                    <p className="text-sm md:text-lg">Presentation Preparation: Teach students how to present their projects,
                        explaining how it works and what they learned.</p>
                    <p className="text-sm md:text-lg">Project Presentation: Each student presents their project to the class,
                        demonstrating the countdown timer and explaining their process.</p>
                    <h4 className="text-lg font-bold py-2 md:py-4">STEM Research: Science Fair Presentation</h4>
                    <p className="text-sm md:text-lg">Activity: Each student presents their project to the class</p>
                    <img src={icon75} alt="logo" className="w-[75px] pt-5" />
                </div>
                <button
                    className="z-10 my-20 px-10 py-5 bg-red-500 rounded-xl text-2xl text-white flex flex-col mx-auto hover:cursor-pointer hover:bg-red-400 transition all-ease duration-300">
                    Apply Now
                </button>
                <div className="fixed bottom-2 right-2 md:bottom-16 md:right-16 bg-transparent">
                    <div className="py-2 bg-transparent z-10">
                        <a href="https://www.instagram.com/vision.coding/"
                            className="nav-element py-2 text-lg md:text-2xl bg-transparent" target="_blank">
                            <div className="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                                <svg fill="#000000" width="65px" height="65px" viewBox="0 0 256 256" id="Flat"
                                    xmlns="http://www.w3.org/2000/svg" className="hidden md:block mx-auto pt-2">
                                    <path
                                        d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                                </svg>
                                <svg fill="#000000" width="50px" height="50px" viewBox="0 0 256 256" id="Flat"
                                    xmlns="http://www.w3.org/2000/svg" className="hidden md:block mx-auto">
                                    <path
                                        d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="py-2">
                        <a href="https://www.facebook.com/profile.php?id=61556365105748" target="_blank"
                            className="nav-element py-2 text-lg md:text-2xl">
                            <div className="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                                <svg fill="#000000" height="65px" width="65px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 310 310" xml:space="preserve" className="hidden md:block mx-auto pt-2">
                                    <g id="XMLID_834_">
                                        <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                                c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                                V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                                C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                                c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                                    </g>
                                </svg>
                                <svg fill="#000000" height="45px" width="45px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 310 310" xml:space="preserve" className="md:hidden mx-auto pt-2">
                                    <g id="XMLID_834_">
                                        <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                                c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                                V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                                C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                                c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="py-2">
                        <a href="http://pf.kakao.com/_LaRxfxj" target="_blank" className="nav-element py-2 text-lg md:text-2xl">
                            <div className="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                                <svg fill="#000000" width="100px" height="100px" viewBox="0 0 24 24" role="img"
                                    xmlns="http://www.w3.org/2000/svg" className="hidden md:block ml-1 pt-2">
                                    <path
                                        d="m8 2c3.866 0 7 2.44267 7 5.45667 0 3.01333-3.134 5.45603-7 5.45603-.38495.0002-.76952-.0243-1.15133-.0734l-2.93867 1.922c-.334.1767-.452.1574-.31467-.2753l.59467-2.452c-1.92-.9733-3.19-2.66-3.19-4.57733 0-3.01334 3.134-5.45667 7-5.45667zm3.938 5.37333.98-.94933c.0565-.05873.0881-.13711.088-.21864-.0001-.08152-.0318-.15983-.0885-.21842s-.1339-.09289-.2154-.09568-.1609.02616-.2214.08074l-1.2854 1.244v-1.028c0-.08346-.0331-.16349-.0921-.2225s-.1391-.09217-.2225-.09217c-.0835 0-.1635.03316-.2225.09217s-.0922.13904-.0922.2225v1.70467c-.0118.04862-.0118.09937 0 .148v.95933c0 .08345.0332.16349.0922.2225s.139.09217.2225.09217c.0834 0 .1635-.03316.2225-.09217s.0921-.13905.0921-.2225v-.90867l.2847-.27533.952 1.35533c.0238.03384.054.06266.0889.08483s.0738.03724.1146.04436c.0407.00712.0824.00614.1228-.00287.0403-.00901.0785-.02588.1124-.04965.0338-.02377.0626-.05397.0848-.08888s.0372-.07384.0444-.11458c.0071-.04073.0061-.08247-.0029-.12282-.009-.04036-.0259-.07855-.0497-.11239l-1.0093-1.43666zm-1.972 1.28267h-.97333v-2.458c-.00373-.08086-.03847-.15718-.09701-.21308-.05854-.05591-.13638-.08711-.21733-.08711-.08094 0-.15878.0312-.21732.08711-.05854.0559-.09329.13222-.09701.21308v2.77267c0 .17333.14.31466.314.31466h1.288c.0835 0 .1635-.03315.2225-.09216s.0922-.13905.0922-.2225c0-.08346-.0332-.1635-.0922-.22251s-.139-.09216-.2225-.09216zm-3.90467-.728.464-1.138.42534 1.138zm1.682.32533.00134-.01066c-.00016-.07928-.03042-.15553-.08467-.21334l-.69733-1.86666c-.02923-.08896-.08492-.16687-.15961-.22334s-.16484-.08879-.25839-.09266c-.09424-.00042-.18638.02787-.26414.08111-.07777.05323-.13748.12888-.1712.21689l-1.10733 2.71666c-.01563.03826-.02357.07922-.02336.12055.0002.04133.00854.08221.02454.12031.01601.0381.03936.07268.06872.10176.02937.02908.06417.05209.10243.06772.03826.01562.07922.02356.12055.02336s.08221-.00854.12031-.02455c.0381-.016.07268-.03935.10176-.06872.02908-.02936.05209-.06417.06772-.10243l.22-.542h1.38l.19933.53334c.01355.03986.03497.0766.06298.10804s.06204.05694.10009.07498c.03804.01805.07932.02827.12138.03008.04207.0018.08407-.00486.12352-.01959.03945-.01472.07554-.03722.10613-.06614.0306-.02893.05508-.06371.07199-.10227s.02592-.08012.02647-.12222c.00056-.0421-.00734-.08389-.02323-.12288zm-2.21466-2.052c0-.08334-.03306-.16327-.09193-.22226-.05887-.059-.13873-.09223-.22207-.0924h-2.16334c-.08345 0-.16349.03315-.2225.09216s-.09216.13905-.09216.2225c0 .08346.03315.16349.09216.22251.05901.05901.13905.09216.2225.09216h.77334v2.49067c0 .08345.03315.16349.09216.2225s.13905.09216.2225.09216c.08346 0 .16349-.03315.22251-.09216.05901-.05901.09216-.13905.09216-.2225v-2.49067h.76c.174 0 .31467-.14133.31467-.31467z"
                                        fill="#001018" />
                                </svg>
                                <svg fill="#000000" width="60px" height="60px" viewBox="0 0 24 24" role="img"
                                    xmlns="http://www.w3.org/2000/svg" className="md:hidden ml-1 pt-2">
                                    <path
                                        d="m8 2c3.866 0 7 2.44267 7 5.45667 0 3.01333-3.134 5.45603-7 5.45603-.38495.0002-.76952-.0243-1.15133-.0734l-2.93867 1.922c-.334.1767-.452.1574-.31467-.2753l.59467-2.452c-1.92-.9733-3.19-2.66-3.19-4.57733 0-3.01334 3.134-5.45667 7-5.45667zm3.938 5.37333.98-.94933c.0565-.05873.0881-.13711.088-.21864-.0001-.08152-.0318-.15983-.0885-.21842s-.1339-.09289-.2154-.09568-.1609.02616-.2214.08074l-1.2854 1.244v-1.028c0-.08346-.0331-.16349-.0921-.2225s-.1391-.09217-.2225-.09217c-.0835 0-.1635.03316-.2225.09217s-.0922.13904-.0922.2225v1.70467c-.0118.04862-.0118.09937 0 .148v.95933c0 .08345.0332.16349.0922.2225s.139.09217.2225.09217c.0834 0 .1635-.03316.2225-.09217s.0921-.13905.0921-.2225v-.90867l.2847-.27533.952 1.35533c.0238.03384.054.06266.0889.08483s.0738.03724.1146.04436c.0407.00712.0824.00614.1228-.00287.0403-.00901.0785-.02588.1124-.04965.0338-.02377.0626-.05397.0848-.08888s.0372-.07384.0444-.11458c.0071-.04073.0061-.08247-.0029-.12282-.009-.04036-.0259-.07855-.0497-.11239l-1.0093-1.43666zm-1.972 1.28267h-.97333v-2.458c-.00373-.08086-.03847-.15718-.09701-.21308-.05854-.05591-.13638-.08711-.21733-.08711-.08094 0-.15878.0312-.21732.08711-.05854.0559-.09329.13222-.09701.21308v2.77267c0 .17333.14.31466.314.31466h1.288c.0835 0 .1635-.03315.2225-.09216s.0922-.13905.0922-.2225c0-.08346-.0332-.1635-.0922-.22251s-.139-.09216-.2225-.09216zm-3.90467-.728.464-1.138.42534 1.138zm1.682.32533.00134-.01066c-.00016-.07928-.03042-.15553-.08467-.21334l-.69733-1.86666c-.02923-.08896-.08492-.16687-.15961-.22334s-.16484-.08879-.25839-.09266c-.09424-.00042-.18638.02787-.26414.08111-.07777.05323-.13748.12888-.1712.21689l-1.10733 2.71666c-.01563.03826-.02357.07922-.02336.12055.0002.04133.00854.08221.02454.12031.01601.0381.03936.07268.06872.10176.02937.02908.06417.05209.10243.06772.03826.01562.07922.02356.12055.02336s.08221-.00854.12031-.02455c.0381-.016.07268-.03935.10176-.06872.02908-.02936.05209-.06417.06772-.10243l.22-.542h1.38l.19933.53334c.01355.03986.03497.0766.06298.10804s.06204.05694.10009.07498c.03804.01805.07932.02827.12138.03008.04207.0018.08407-.00486.12352-.01959.03945-.01472.07554-.03722.10613-.06614.0306-.02893.05508-.06371.07199-.10227s.02592-.08012.02647-.12222c.00056-.0421-.00734-.08389-.02323-.12288zm-2.21466-2.052c0-.08334-.03306-.16327-.09193-.22226-.05887-.059-.13873-.09223-.22207-.0924h-2.16334c-.08345 0-.16349.03315-.2225.09216s-.09216.13905-.09216.2225c0 .08346.03315.16349.09216.22251.05901.05901.13905.09216.2225.09216h.77334v2.49067c0 .08345.03315.16349.09216.2225s.13905.09216.2225.09216c.08346 0 .16349-.03315.22251-.09216.05901-.05901.09216-.13905.09216-.2225v-2.49067h.76c.174 0 .31467-.14133.31467-.31467z"
                                        fill="#001018" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="py-2">
                        <a href="http://wa.me/+16049003707" target="_blank" className="nav-element py-2 text-lg md:text-2xl">
                            <div className="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                                <svg fill="#000000" height="60px" width="60px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 308 308" xml:space="preserve" className="hidden md:block mx-auto pt-2">
                                    <g id="XMLID_468_">
                                        <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                                c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                                c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                                c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                                c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                                c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                                c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                                c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                                c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                                C233.168,179.508,230.845,178.393,227.904,176.981z" />
                                        <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
                                c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
                                c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
                                 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
                                l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
                                c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
                                C276.546,215.678,222.799,268.994,156.734,268.994z" />
                                    </g>
                                </svg>
                                <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 308 308" xml:space="preserve" className="md:hidden mx-auto pt-2">
                                    <g id="XMLID_468_">
                                        <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                                c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                                c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                                c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                                c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                                c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                                c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                                c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                                c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                                C233.168,179.508,230.845,178.393,227.904,176.981z" />
                                        <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
                                c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
                                c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
                                 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
                                l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
                                c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
                                C276.546,215.678,222.799,268.994,156.734,268.994z" />
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}