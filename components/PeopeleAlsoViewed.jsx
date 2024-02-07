import { ArrowForward } from "@mui/icons-material";
import React from "react";

const PeopeleAlsoViewed = () => {
  return (
    <>
      <div
        id="people-also-viewed"
        className="w-full px-6 h-auto lg:h-[90vh] bg-cover object-cover"
        style={{
          backgroundImage: `url(/images/luke-chesser-pJadQetzTkI-unsplash.jpg)`,
        }}
      >
        <h2 className="text-white text-3xl p-5">People also viewed...</h2>
        <div className="flex justify-center w-full items-center my-auto">
          <div className=" flex flex-col lg:flex-row gap-5">
            <div className="cursor-pointer transition-all duration-150 ease-linear   card w-full lg:w-72 bg-white shadow-lg hover:scale-[1.04]">
              {" "}
              <div className="card-body text-gray-600">
                <h3 className="font-semibold py-3 text-xl">
                  CD (Certificate of deposit)
                </h3>
                <p className="py-3 leading-6">
                  The CD calculator allows you to estimate the effectiveness of
                  the investment in the certificates of deposit.
                </p>
                <div className="card-actions">
                  <p className="text-primary leading-6">
                    The CD calculator allows you to estimate the effectiveness
                    of the investment in the certificates of deposit.
                    <ArrowForward fontSize="small" />
                  </p>
                </div>
              </div>
            </div>

            <div className=" transition-all duration-150 ease-linear  cursor-pointer card w-full lg:w-72 bg-white shadow-lg hover:scale-[1.04]">
              {" "}
              <div className="card-body text-gray-600">
                <h3 className="font-semibold py-3 text-xl">Debt payoff</h3>
                <p className="leading-6 py-3">
                  The debt payoff calculator helps you to choose the best
                  repayment plan and compare basic debt payoff plans.
                </p>
                <div className="card-actions">
                  <p className="text-primary">
                    The CD calculator allows you to estimate the effectiveness
                    of the investment in the certificates of deposit.
                    <ArrowForward />
                  </p>
                </div>
              </div>
            </div>
            <div className=" cursor-pointer transition-all duration-150 ease-linear card w-full lg:w-72 bg-white shadow-lg hover:scale-[1.04]">
              {" "}
              <div className="card-body">
                <h3 className="font-semibold py-3 text-xl">
                  Ideal egg boiling
                </h3>
                <p className="leading-6 py-3">
                  Quantum physicist's take on boiling the perfect egg. Includes
                  times for quarter and half-boiled eggs.
                </p>
                <div className="card-actions">
                  <p className="text-primary">
                    Quantum physicist's take on boiling the perfect egg.
                    Includes times for quarter and half-boiled eggs.
                    <ArrowForward />
                  </p>
                </div>
              </div>
            </div>

            <div className=" cursor-pointer transition-all duration-150 ease-linear card  w-full lg:w-72 bg-white shadow-lg hover:scale-[1.04]">
              {" "}
              <div className="card-body">
                <h3 className="font-semibold py-3 text-xl">Meat footprint</h3>
                <p className="py-3 leading-6">
                  The significant figures calculator performs operations on sig
                  figs and shows you a step-by-step solution!
                </p>
                <div className="card-actions">
                  <p className="text-primary">
                    Meat Footprint Calculator
                    <ArrowForward />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopeleAlsoViewed;
