"use client";
import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import { openPortfolioModal } from "@/utlis/togglePortfolioModel";
import PortfolioModal from "@/components/modals/PortfolioModel";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-5 py-xl-8 my-6" style={{ paddingTop: "3rem" }}>
      <div className="container">

        <div className="text-center mb-6 mb-lg-8">
          <h2 className="title h3 lg:h2 xl:h1 m-0">
            Our Latest{" "}
            <span className="d-inline-flex px-1 bg-primary dark:bg-secondary text-secondary dark:text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
              Work
            </span>
          </h2>

          <p className="lead text-muted mx-auto" style={{ maxWidth: "500px" }}>
            Check out some of our latest projects and see the quality of our work for yourself.
          </p>
        </div>

        <div className="row g-4">
          {portfolioData.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-4">
              <div className="feature-item panel p-2 border rounded dark:text-white hover:scale-105 duration-150 transition-all">

                <div className="card-img-top overflow-hidden position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100 transition-scale"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title mb-2 text-center dark:text-white text-capitalize mt-2">
                    {item.id}. {item.title}
                  </h5>

                  <div className="d-flex justify-center">
                    <button
                      onClick={() => {
                        setSelectedProject(item);
                        openPortfolioModal();
                      }}
                      className="px-3 btn btn-md h-48px lg:h-56px w-150px btn-primary text-white"
                    >
                      View Details
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <PortfolioModal project={selectedProject} />
    </section>
  );
};

export default Portfolio;
