import React from "react";
import Navbar from "./Navbar";
import image1 from "./image1.jpg";
import Footer from "./Footer";

function AboutUs() {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana dialan",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Micheal colorand",
      title: "Software engineer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Daniel martin",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Vicky tanson",
      title: "Product manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
      github: "javascript:void(0)",
    },
  ];

  return (
    <>
      <Navbar></Navbar>

      <section>
        <div class="w-full flex flex-col items-center">
          <div class="flex flex-col items-center justify-center py-15 md:py-20">
            <h1 class="text-black font-semibold font-Inter text-3xl md:text-6xl">
              We’re here to
            </h1>
            <h1 class="text-[#5E64DA] font-semibold font-Inter text-3xl md:text-6xl">
              Guarantee your success
            </h1>
          </div>

{/* ************ */}
<section class="bg-white py-10 flex justify-center">
  <div class="max-w-6xl w-full relative">
    {/* <!-- Top Card --> */}
    <div class="bg-[#2D2D52] text-white rounded-[2rem] p-6 text-center relative z-10">
      <p class="text-base sm:text-lg py-10">
        Progentures Solutions is an Edutech & IT Services Company that aims to bridge the gap between theoretical learning and industry skills. We provide internship programs, skill-based training, and IT solutions to help students and professionals grow.
      </p>
    </div>

    {/* <!-- Overlapping Image --> */}
    <div class="w-full flex justify-center relative z-20 -mt-8">
      <img src={image1} alt="Team" class="rounded-[1rem] w-full max-w-3xl h-[300px] object-cover object-top"/>
    </div>

    {/* <!-- Bottom Card --> */}
    <div class="bg-[#2D2D52] text-white rounded-[2rem] p-6 mt-[-2rem] text-center relative z-10">
      <p class="text-base sm:text-lg py-10">
        With a vision to empower young talent, we offer industry-level internships in domains like Web Development, App Development, Data Analytics, UI/UX, and more. Our internships focus on real-world projects, practical learning, and career-building experiences.
      </p>
    </div>
  </div>
</section>

          <section class="w-full md:px-40 px-10 bg-white">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-bold text-gray-900 mb-2">Our Vision</h2>
              <div class="w-16 h-1 bg-gray-300 mx-auto mb-4"></div>
              <p class="text-lg font-semibold text-gray-800 max-w-4xl mx-auto">
                At Progentures Solutions, we aim to bridge the gap between
                academic learning and industry needs by providing students with
                practical, hands-on experience. Our vision is to create a world
                where every student is career-ready, equipped with job-oriented
                skills and real-world exposure.
              </p>
            </div>

            <div class="flex flex-wrap justify-center gap-30 mb-10">
              <div class="flex w-[300px] rounded-[20px] overflow-hidden shadow-lg">
                <div class="w-1/3 bg-gray-300 rounded-l-[20px]"></div>
                <div class="w-2/3 bg-[#2D2D52] text-white p-4 flex flex-col justify-between">
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Trainings</h3>
                    <p class="text-sm leading-snug">
                      Learn new-age skills on the go with our short-term online
                      trainings
                    </p>
                  </div>
                  <div class="mt-4 text-sm font-medium flex justify-end">
                    Explore now →
                  </div>
                </div>
              </div>

              <div class="flex w-[300px] rounded-[20px] overflow-hidden shadow-lg">
                <div class="w-1/3 bg-gray-300 rounded-l-[20px]"></div>
                <div class="w-2/3 bg-[#2D2D52] text-white p-4 flex flex-col justify-between">
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Trainings</h3>
                    <p class="text-sm leading-snug">
                      Learn new-age skills on the go with our short-term online
                      trainings
                    </p>
                  </div>
                  <div class="mt-4 text-sm font-medium flex justify-end">
                    Explore now →
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-8 justify-items-center">
              <div class="flex w-[300px] rounded-[20px] overflow-hidden shadow-lg">
                <div class="w-1/3 bg-gray-300 rounded-l-[20px]"></div>
                <div class="w-2/3 bg-[#2D2D52] text-white p-4 flex flex-col justify-between">
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Trainings</h3>
                    <p class="text-sm leading-snug">
                      Learn new-age skills on the go with our short-term online
                      trainings
                    </p>
                  </div>
                  <div class="mt-4 text-sm font-medium flex justify-end">
                    Explore now →
                  </div>
                </div>
              </div>

              <div class="flex w-[300px] rounded-[20px] overflow-hidden shadow-lg">
                <div class="w-1/3 bg-gray-300 rounded-l-[20px]"></div>
                <div class="w-2/3 bg-[#2D2D52] text-white p-4 flex flex-col justify-between">
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Trainings</h3>
                    <p class="text-sm leading-snug">
                      Learn new-age skills on the go with our short-term online
                      trainings
                    </p>
                  </div>
                  <div class="mt-4 text-sm font-medium flex justify-end">
                    Explore now →
                  </div>
                </div>
              </div>

              <div class="flex w-[300px] rounded-[20px] overflow-hidden shadow-lg">
                <div class="w-1/3 bg-gray-300 rounded-l-[20px]"></div>
                <div class="w-2/3 bg-[#2D2D52] text-white p-4 flex flex-col justify-between">
                  <div>
                    <h3 class="font-semibold text-lg mb-2">Trainings</h3>
                    <p class="text-sm leading-snug">
                      Learn new-age skills on the go with our short-term online
                      trainings
                    </p>
                  </div>
                  <div class="mt-4 text-sm font-medium flex justify-end">
                    Explore now →
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="w-full md:px-40 py-10">
            <h2 class="text-4xl font-bold text-gray-900 mb-2">Our Mission</h2>
            <div class=" h-1 bg-gray-300 md:w-200"></div>
            <div class="flex flex-col py-10 text-xl gap-3">
              <div class="grid grid-cols-10">
                <div class="col-span-3 font-bold">Unmatched service</div>
                <div class="col-span-7 text-justify">
                  Support corporate clients and financial investors with their
                  growth strategy and international development.
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="col-span-3 font-bold">Specific</div>
                <div class="col-span-7 text-justify">
                  ConsultUs' core expertise lies in the ability to support our
                  clients in understanding, analysing and executing commercial
                  and investment strategies in specific markets.{" "}
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="col-span-3 font-bold">Experience</div>
                <div class="col-span-7 text-justify">
                  Experience in working with and assisting a wide range of
                  clients from international corporations to small/medium-sized
                  businesses, from large corporate debt providers to mid-market
                  private equity investors.{" "}
                </div>
              </div>
              <div class="grid grid-cols-10">
                <div class="col-span-3 font-bold">Technology</div>
                <div class="col-span-7 text-justify">
                  The best combination of technology and people.
                </div>
              </div>
            </div>
          </div>
          <section class=" w-full bg-[#2D2D52] text-white text-center py-10">
            <h2 class="text-3xl font-semibold mb-4">What Sets Us Apart?</h2>
            <p class="mb-2">
              We go beyond traditional learning – Our focus is on real-world
              implementation of knowledge.
            </p>
            <p class="mb-2">
              We provide holistic career support – From internships to job
              placement assistance.
            </p>
            <p>
              We foster an innovation-driven ecosystem – Encouraging students to
              think creatively, solve problems, and build projects.
            </p>
          </section>

          <div class="w-full bg-[#EFEDF5]">
            <section className="py-14">
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                  <h3 className="text-gray-800 text-3xl font-semibold sm:text-5xl">
                    Meet our talent team
                  </h3>
                  <p className="text-gray-600 mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                </div>
                <div className="mt-12">
                  <ul className="grid gap-8 lg:grid-cols-2">
                    {team.map((item, idx) => (
                      <li key={idx} className="gap-8 sm:flex">
                        <div className="w-full h-60">
                          <img
                            src={item.avatar}
                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                            alt=""
                          />
                        </div>
                        <div className="mt-4 sm:mt-0">
                          <h4 className="text-lg text-gray-700 font-semibold">
                            {item.name}
                          </h4>
                          <p className="text-indigo-600">{item.title}</p>
                          <p className="text-gray-600 mt-2">{item.desc}</p>
                          <div className="mt-3 flex gap-4 text-gray-400">
                            <a href={item.twitter}>
                              <svg
                                className="w-5 h-5 duration-150 hover:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 48 48"
                              >
                                <g clip-path="url(#clip0_17_80)">
                                  <path
                                    fill="currentColor"
                                    d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_17_80">
                                    <path
                                      fill="currentColor"
                                      d="M0 0h48v48H0z"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </a>
                            <a href={item.github}>
                              <svg
                                className="w-5 h-5 duration-150 hover:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 48 48"
                              >
                                <g
                                  fill="currentColor"
                                  clip-path="url(#clip0_910_44)"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                                    clip-rule="evenodd"
                                  />
                                  <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_910_44">
                                    <path
                                      fill="currentColor"
                                      d="M0 0h48v48H0z"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </a>
                            <a href={item.linkedin}>
                              <svg
                                className="w-5 h-5 duration-150 hover:text-gray-500"
                                fill="none"
                                viewBox="0 0 48 48"
                              >
                                <g clip-path="url(#clip0_17_68)">
                                  <path
                                    fill="currentColor"
                                    d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_17_68">
                                    <path
                                      fill="currentColor"
                                      d="M0 0h48v48H0z"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
          {/* Get in touch */}
          <main className="pt-5 pb-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-2">
              <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                <p className="text-gray-800 text-3xl font-semibold sm:text-5xl">
                  Get in touch
                </p>
                <p>
                  We’d love to hear from you! Please fill out the form bellow.
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                      <label className="font-medium">First name</label>
                      <input
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Last name</label>
                      <input
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Phone number</label>
                    <div className="relative mt-2">
                      <input
                        type="number"
                        placeholder="+91 1234567890"
                        required
                        className="w-full pl-[1.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium">Message</label>
                    <textarea
                      required
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <button className="w-full px-4 py-2 text-white font-medium bg-[#5C5C84] hover:bg-[#5C5C84]/75 active:bg-[#5C5C84]/75 rounded-lg duration-150">
                    Connect With Us
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}

export default AboutUs;
