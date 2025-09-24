"use client"

import { useState } from "react"
import { WindowsTaskbar } from "../components/windows-taskbar"
import { WindowsWindow } from "../components/windows-window"
import { DesktopIcon } from "../components/desktop-icon"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card } from "../components/ui/card"

export default function Portfolio() {
  const [openWindows, setOpenWindows] = useState<string[]>(["about"])

  const toggleWindow = (windowId: string) => {
    setOpenWindows((prev) => (prev.includes(windowId) ? prev.filter((id) => id !== windowId) : [...prev, windowId]))
  }

  return (
    <div className="min-h-screen desktop-bg pb-12">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        <DesktopIcon icon="👩‍💻" label="About Me" onClick={() => toggleWindow("about")} />
        <DesktopIcon icon="💼" label="Projects" onClick={() => toggleWindow("projects")} />
        <DesktopIcon icon="🎓" label="Skills" onClick={() => toggleWindow("skills")} />
        <DesktopIcon icon="💻" label="Experience" onClick={() => toggleWindow("experience")} />
        <DesktopIcon icon="📧" label="Contact" onClick={() => toggleWindow("contact")} />
        <DesktopIcon icon="🌸" label="Fun Stuff" onClick={() => toggleWindow("fun")} />
      </div>

      {/* Windows */}
      <div className="p-8 pt-16">
        {/* About Window */}
        {openWindows.includes("about") && (
          <WindowsWindow title="About Me - Vivian.exe" className="mb-4" onClose={() => toggleWindow("about")}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-6xl">👩‍💻</div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">Vivian Song</h1>
                  <p className="text-lg text-muted-foreground">Computer Science @ UofT</p>
                  <p className="text-sm text-accent">{"{ downloading aura... }"}</p>
                </div>
              </div>

              <div className="bg-muted p-4 rounded border-2 border-border">
                <p className="text-sm leading-relaxed">
                  {"Hi there! 💖 I'm a fourth year CS student at the University of Toronto with a focus in HCI! "}
                  {"I'm currently working on full-stack projects at Dayforce as a SWE Intern on the Strategy, Project & Technology (SP&T) team. "}
                  {"I have a strong interest in full-stack development, database management, and leveraging AI to optimize and build efficient systems. "}
                  {"In my free time I like to draw, play guitar and build silly things with code :) "}

                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Typescript</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">C#/.NET</Badge>
              </div>
            </div>
          </WindowsWindow>
        )}

        {/* Projects Window */}
        {openWindows.includes("projects") && (
          <WindowsWindow
            title="My Projects - Portfolio.exe"
            className="mb-4 ml-8"
            onClose={() => toggleWindow("projects")}
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">💼 Featured Projects</h2>

              <div className="grid gap-4">
                <Card className="p-4 border-2 border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🌸</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary">
                        <a
                          href="https://github.com/viviansongg/Wingterpreter"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Wingterpreter
                        </a>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        An interactive ASL learning game where players control a Flappy Bird–style experience using hand gestures, making sign language practice engaging through gamification. Leveraged computer vision and machine learning to achieve 80%+ real-time sign recognition accuracy, integrating a React-based front end with a custom-trained classification model.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="outline">Hugging Face</Badge>
                        <Badge variant="outline">Roboflow</Badge>
                        <Badge variant="outline">React</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎨</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary">
                        <a
                          href="https://drive.google.com/file/d/17AuQuL5NqLm8qc7fWgoLflytzx0fmRMY/view"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          SMILE Program Management Platform
                        </a>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        A mobile program management system with React Native and Django that securely stores medical and goal-related documents, cutting retrieval time by 50%. Designed a matching feature that pairs participants with instructors based on needs and availability, reducing manual coordination by 80% and improving match accuracy by 30%.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="outline">React Native</Badge>
                        <Badge variant="outline">Django</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">TailwindCSS</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📱</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary">
                        <a
                          href="https://github.com/viviansongg/bias.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          bias.io
                        </a>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Developed a generative AI–powered web application that evaluates the credibility of online articles, processing 100,000+ sources through a Flask backend integrated with the Gemini and News APIs. Designed a responsive React interface with Chakra UI, reducing user interaction time by 40% and improving cross-device accessibility.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="outline">Gemini</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">Flask</Badge>
                        <Badge variant="outline">React</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </WindowsWindow>
        )}

        {/* Skills Window */}
        {openWindows.includes("skills") && (
          <WindowsWindow
            title="Skills & Experience - Resume.exe"
            className="mb-4 ml-16"
            onClose={() => toggleWindow("skills")}
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">🎓 Technical Skills</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded border">
                  <h3 className="font-bold mb-2 text-black-600">💻 Programming</h3>
                  <div className="flex flex-wrap gap-1">
                    <Badge>Python</Badge>
                    <Badge>Java</Badge>
                    <Badge>C</Badge>
                    <Badge>C++</Badge>
                    <Badge>C#</Badge>
                  </div>
                </div>

                <div className="bg-muted p-3 rounded border">
                  <h3 className="font-bold text-black-600 mb-2">🌐 Web Development</h3>
                  <div className="flex flex-wrap gap-1">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                </div>

                <div className="bg-muted p-3 rounded border">
                  <h3 className="font-bold text-black-600 mb-2">🌐 Frameworks</h3>
                  <div className="flex flex-wrap gap-1">
                    <Badge>Django</Badge>
                    <Badge>.NET</Badge>
                    <Badge>Flask</Badge>
                    <Badge>React Native</Badge>
                  </div>
                </div>

                <div className="bg-muted p-3 rounded border">
                  <h3 className="font-bold text-black-600 mb-2">🗄️ Database & Tools</h3>
                  <div className="flex flex-wrap gap-1">
                    <Badge>PostgreSQL</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>PowerBI</Badge>
                    <Badge>Git</Badge>
                  </div>
                </div>

                <div className="bg-muted p-3 rounded border">
                  <h3 className="font-bold text-black-600 mb-2">🎨 Design</h3>
                  <div className="flex flex-wrap gap-1">
                    <Badge>Figma</Badge>
                    <Badge>Adobe Creative Suite</Badge>
                    <Badge>UI/UX Design</Badge>
                    <Badge>Prototyping</Badge>
                  </div>
                </div>
              </div>

              {/* <div className="bg-accent/20 p-4 rounded border-2 border-accent">
                <h3 className="font-bold text-accent-foreground mb-2">🏆 Recent Achievements</h3>
                <ul className="text-sm space-y-1">
                  <li>• 1st Place - University Hackathon 2024</li>
                  <li>• Dean's List - Fall 2023 & Spring 2024</li>
                  <li>• Open Source Contributor - 50+ commits</li>
                  <li>• Google Developer Student Club - Vice President</li>
                </ul>
              </div> */}
            </div>
          </WindowsWindow>
        )}

        {/* Experience Window */}
        {openWindows.includes("experience") && (
          <WindowsWindow
            title="Work Experience - Career.exe"
            className="mb-4 ml-12"
            onClose={() => toggleWindow("experience")}
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">💻 Work Experience</h2>

              <div className="space-y-4">
                <Card className="p-4 border-2 border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🚀</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-primary">Software Engineer Intern</h3>
                          <p className="text-black-500 font-medium">Dayforce</p>
                        </div>
                        <Badge variant="outline">Sept. 2025 - Present</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Contributing to the development and maintenance of Dashboards Pro, a data visualization platform used by 5,000+ 
                        global clients, by implementing new features and resolving bugs across the full stack (React, .NET, Power BI). 
                        Enhancing performance and UI through backend optimizations and UI improvements leveraging Power BI for dynamic 
                        reporting and .NET for scalable service integration. Collaborating within a cross-functional Agile team of 8+ 
                        developers to design, develop, and deploy robust dashboard solutions aligned with client needs.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">C#/.NET</Badge>
                        <Badge variant="secondary">Power Bi</Badge>
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">REST APIs</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎓</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-primary">Software Engineer Intern</h3>
                          <p className="text-black-500 font-medium">McKesson</p>
                        </div>
                        <Badge variant="outline">May 2025 - Aug. 2025</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Supported a cross-functional team of 20+ developers, analysts and DevOps engineers at a Fortune 10
                        healthcare company. Designed and developed an automated data validation tool in Python, SQL, and 
                        Visual Studio to execute and verify 100+ test cases comparing patient health information across two 
                        databases, reducing manual QA effort by 80% and improving defect detection speed. Wrote and optimized 
                        T-SQL queries to manage, transform, and validate data across datasets exceeding 10M+ records in enterprise 
                        data warehouse environments.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">SQL</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Visual Studio</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💡</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-primary">Software Developer Intern</h3>
                          <p className="text-black-500 font-medium">Prep Doctors</p>
                        </div>
                        <Badge variant="outline">July 2024 - Sept. 2024</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Spearheaded the integration of Prep Doctor’s LMS with RESTful DRM APIs using 256-bit AES encryption, 
                        ensuring secure and efficient content delivery on the LMS platform. Improved LMS user experience and 
                        security for 1000+ students in 21 courses taught by 20+ instructors while maintaining compliance with
                         DRM policies. Leveraged OAuth 2.0 to directly authenticate LMS users to optimize client experience. 
                         Authored detailed documentation on the integration process and conducted training sessions for end-users 
                         and administrators.

                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">REST APIs</Badge>
                        <Badge variant="secondary">C#/.NET</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-border bg-card">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💡</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-primary">Software Developer</h3>
                          <p className="text-black-500 font-medium">Computer Science Department - University of Toronto</p>
                        </div>
                        <Badge variant="outline">May 2024 - June 2025</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Utilized Python and Ren’py to model 3 forensics science processes through an interactive prototype. 
                        Applied OOP principles in Python functions to optimize Ren’py syntax, reducing projected development time by 30%
                        (saving roughly one month from the original schedule). Worked with a multidisciplinary team of 5 student developers
                        to perform rigorous testing to refine simulation accuracy and performance.

                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Ren'py</Badge>
                        <Badge variant="secondary">UI/UX Design</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-accent/20 p-4 rounded border-2 border-accent">
                <h3 className="font-bold text-accent-foreground mb-2">🌟 Key Accomplishments</h3>
                <ul className="text-sm space-y-1">
                  <li>• Built features and optimized performance for Dashboards Pro, a data visualization platform serving 5,000+ global clients.</li>
                  <li>• Developed an automated data validation tool (Python/SQL) for 10M+ records, cutting QA effort by 80% and improving defect detection.</li>
                  <li>• Integrated LMS with DRM APIs using AES encryption and OAuth 2.0, securing content for 1,000+ students across 21 courses.</li>
                  <li>• Created an interactive forensic science simulation in Python/Ren’Py, reducing projected dev time by 30% through OOP optimization.</li>
                </ul>
              </div>
            </div>
          </WindowsWindow>
        )}

        {/* Contact Window */}
        {openWindows.includes("contact") && (
          <WindowsWindow
            title="Get In Touch - Contact.exe"
            className="mb-4 ml-24"
            onClose={() => toggleWindow("contact")}
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">📧 Let's Connect!</h2>

              <div className="bg-muted p-4 rounded border-2 border-border">
                <p className="text-sm mb-4">
                  {"If you are interested in collaborating on a project, have a job opportunity, or just want to say hi, feel free to reach out 💖"}
                </p>

                <div className="space-y-3">
                  <Button className="win95-button w-full justify-start gap-2">📧 viviann.song006@gmail.com</Button>
                  <Button className="win95-button w-full justify-start gap-2">💼 linkedin.com/in/vivian-songg/</Button>
                  <Button className="win95-button w-full justify-start gap-2">🐙 github.com/viviansongg</Button>
                </div>
              </div>

              <div className="bg-primary/20 p-4 rounded border-2 border-primary">
                <h3 className="font-bold text-primary mb-2">💌 Currently Looking For</h3>
                <ul className="text-sm space-y-1">
                  <li>• Winter 2026 Software Engineering/Development Internships</li>
                  <li>• Summer 2026 Software Engineering/Development Internships</li>      
                  <li>• Full-time Software Engineering/Development Roles (Starting May 2027)</li>
                </ul>
              </div>
            </div>
          </WindowsWindow>
        )}

        {/* Fun Window */}
        {openWindows.includes("fun") && (
          <WindowsWindow title="Fun Corner - Extras.exe" className="mb-4 ml-32" onClose={() => toggleWindow("fun")}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-primary flex items-center gap-2">🌸 Beyond Code</h2>

              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded border-2 border-primary">
                  <h3 className="font-bold text-primary mb-2">🎨 Hobbies & Interests</h3>
                  <div className="text-sm space-y-1">
                    <p>• Digital art and graphic design</p>
                    <p>• Guitar</p>
                    <p>• Game development</p>
                    <p>• Figure skating</p>
                    <p>• Gaming (i love cozy indie games)</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-4 rounded border-2 border-accent">
                  <h3 className="font-bold text-accent-foreground mb-2">💖 Fun Facts</h3>
                  <div className="text-sm space-y-1">
                    <p>• I've been told I have Comic Sans handwriting</p>
                    <p>• I can do sit-ups with 1 foot</p>
                    <p>• I'm addicted to malatang</p>
                  </div>
                </div>

                {/* <div className="text-center p-4">
                  <div className="text-4xl mb-2">🌟</div>
                  <p className="text-sm text-muted-foreground italic">
                    "Code is poetry, and every bug is just a plot twist!"
                  </p>
                </div> */}
              </div>
            </div>
          </WindowsWindow>
        )}
      </div>

      <WindowsTaskbar />
    </div>
  )
}
