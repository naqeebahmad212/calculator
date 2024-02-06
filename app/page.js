"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";
import {
  ArrowForward,
  Forward,
  ForwardOutlined,
  NextPlan,
} from "@mui/icons-material";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function Home() {
  const [scrollY, setScrollY] = useState("");
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    console.log(scrollY);
  });

  const [grpw, setGrpw] = useState(40);
  const [payRate, setPayRate] = useState(10);
  const [absenDPY, setAbsentDPY] = useState(15);

  const [tax, setTax] = useState(900);
  const [insurance, setInsurance] = useState(600);
  const [benifits, setBenifits] = useState(200);
  const [overtime, setOverTime] = useState(700);
  const [supplies, setSupplies] = useState(890);
  const [totalRevenu, setTotalRevenu] = useState(80000);

  const content = React.useRef();
  const cards = React.useRef();

  let otherAnnualCots =
    Number(tax) +
    Number(insurance) +
    Number(benifits) +
    Number(overtime) +
    Number(supplies);

  const weeksInYear = 4 * 12;

  const grpy = grpw * weeksInYear;
  const grossPay = payRate * grpy;
  const hrsNotWorkY = absenDPY * (grpw / 7);
  const hrsWorked = grpy - hrsNotWorkY;

  const annualPayroll = Number(grossPay) + Number(otherAnnualCots);
  const laborPercentage = payRate / (Number(grossPay) / 100);
  const laborHrly = laborPercentage * (annualPayroll / 100);

  const laborPercentageInRevenu = annualPayroll / (totalRevenu / 100);

  return (
    <main>
      <Navbar />
      <div className="hero-container w-[98%]">
        {/* <div className="flex"> */}
        <div
          className="w-[40%] hidden lg:block h-[100%] absolute top-0 left-0 bg-cover bg-top object-cover"
          id="image-container"
          style={{
            backgroundImage: `url(/images/luke-chesser-pJadQetzTkI-unsplash.jpg)`,
          }}
        >
          <div className="absolute -right-[3px]  bg-white border-0 w-[60%] h-[100%] ractangle"></div>
        </div>
        <div className="lg:w-[98%] my-0 mx-auto content relative">
          <div className=" w-[100%] lg:justify-center flex flex-1 flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[475px] flex justify-center">
              <div className="w-[100%] mx-auto block">
                <div
                  className={`cards-container mx-auto  top-[77px] sticky min-h-96 p-6 m-4`}
                  ref={cards}
                >
                  <div className=" w-[100%] mx-auto flex flex-col justify-center items-center mb-[20px]">
                    <div className="card w-full lg:w-96 mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Gross pay
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Gross hours per week</p>{" "}
                            <input
                              autoFocus={true}
                              type="number"
                              className=" w-10 text-lg p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={grpw}
                              onChange={(e) => setGrpw(e.target.value)}
                            />
                            hours{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p>Gross hours per year</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={grpy}
                              onChange={(e) => setGrpy(e.target.value)}
                            />
                            hours{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Pay Rate</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={payRate}
                              onChange={(e) => setPayRate(e.target.value)}
                            />
                            Rs/hours{" "}
                          </div>
                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p>Gross Pay</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={grossPay}
                              onChange={(e) => setGrossPay(e.target.value)}
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-full lg:w-96 mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Net hours worked
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Absent days per year</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={absenDPY}
                              onChange={(e) => setAbsentDPY(e.target.value)}
                            />
                            days{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Hours not worked per year</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={hrsNotWorkY.toFixed(2)}
                            />
                            hours{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Net hours worked</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={hrsWorked.toFixed(2)}
                              onChange={(e) => setPayRate(e.target.value)}
                            />
                            hours{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-full lg:w-96 mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Additional annual costs
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Taxes</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={tax}
                              onChange={(e) => setTax(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Insurance</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={insurance}
                              onChange={(e) => setInsurance(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Benifits</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={benifits}
                              onChange={(e) => setBenifits(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Overtime</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={overtime}
                              onChange={(e) => setOverTime(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Supplies</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={supplies}
                              onChange={(e) => setSupplies(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Other annual costs</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={otherAnnualCots}
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-full lg:w-96 mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Main Results
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Annual payroll labor cost</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={annualPayroll}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Hourly labor cost</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={laborHrly.toFixed(2)}
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-full lg:w-96 mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Labor cost percentage
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Total revenue</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={totalRevenu}
                              onChange={(e) => setTotalRevenu(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Hourrly labor cost</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={laborPercentageInRevenu.toFixed(2)}
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card sticky top-[77px] w-96 mb-4 shadow-2xl bg-base-100 ">
                      <div className="w-full p-5 text-lg rounded-md hover:scale-[1.1] transition-all duration-75 shadow-xl bg-blue-950 text-white">
                        <p>Checkout 55 similar business planning calculator</p>
                      </div>

                      <div className="flex mt-3 gap-3 sticky top-8">
                        <div className="flex items-center justify-center shadow-lg w-52 h-20 text-primary hover:scale-[1.1] transition-all duration-75 rounded-md  p-3 bg-slate-200">
                          <p>3D printer - buy vs aoutsouce</p>
                        </div>

                        <div className="flex items-center justify-center shadow-lg w-52 h-20 text-primary hover:scale-[1.1] transition-all duration-75  rounded-md p-3 bg-slate-200">
                          <p>Absence percentage</p>
                        </div>
                      </div>

                      <div className="flex mt-3 gap-3 ">
                        <div className="flex items-center justify-center shadow-lg 2-52 text-primary h-20 hover:scale-[1.1] transition-all duration-75 rounded-md  p-3 bg-slate-200">
                          <p>Accumulated deprecian</p>
                        </div>
                        <div className="flex items-center justify-center shadow-lg w-52 h-20  text-white rounded-md hover:scale-[1.1] transition-all duration-75 p-3 bg-blue-950">
                          <p>...52 more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content calculator-details w-[full] lg:w-[520px] flex flex-col items-center">
              <div className=" py-5 border-b border-gray-300">
                <h2 className="text-4xl p-3 font-bold">
                  Lobor Cost Calculator
                </h2>
                <p className="px-3 py-1 text-gray-400">
                  Created by <span>Naqeeb Ahmad developer</span>
                </p>
                <p className="px-3 py-1 text-gray-400">
                  Reviewed by Dominik,{" "}
                  <i>phD Managament Ecomonic and business strategy 2009</i>
                </p>
                <p className="px-3 py-1 text-gray-400">
                  Based on research by Baye , M ,{" "}
                </p>
                <p className="px-3 py-1 text-gray-400">
                  Last Updated at {new Date(Date.now()).toDateString()}
                </p>

                <span className="p-3">
                  <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  />
                </span>

                <div className="p-4">
                  <button className="text-primary btn btn-ghost border border-primary rounded-full min-h-[10px] h-[33px] p-0 px-5 py-0 hover:bg-transparent hover:border-gray-600 hover:text-gray-600 m-0 text-xs">
                    <ChatIcon className=" text-xs" /> Cite
                  </button>
                </div>
              </div>

              <div className="table-content py-5 border-b border-gray-300">
                <h3 className="px-2">Table of contents:</h3>
                <ul className="py-4  list-disc">
                  <li className="text-primary py-1">
                    <Link className="link text-primary" href={"#lobor-cost"}>
                      What are labor costs
                    </Link>
                  </li>
                  <li className="text-primary py-1">
                    <Link
                      className="link text-primary"
                      href={"#direct-indirect"}
                    >
                      Direct and Indirect labor costs
                    </Link>
                  </li>
                  <li className="text-primary py-1">
                    <Link
                      className="link text-primary"
                      href={"#calculate-cost"}
                    >
                      How to calculate labor costs
                    </Link>
                  </li>
                  <li className="text-primary py-1">
                    <Link className="link text-primary" href={"#faq"}>
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-5">
                <p>
                  Employ the <strong>labor cost calculator</strong> to{" "}
                  <strong>
                    {" "}
                    estimate the actual hourlylabor cost of an employee.
                  </strong>{" "}
                  Read further to get an insight into{" "}
                  <i>
                    what labor costs are and how to calculate labor cost
                  </i>{" "}
                  with a step by step procedure including the related labor cost
                  formulas. After reading you will be able to better answer "How
                  much does an employee cost?"
                </p>
                <br />
                <p>
                  You may also check some other calculators created for
                  different types of costs. For example,{" "}
                  <span className="link text-primary">
                    our meeting cost calculator
                  </span>{" "}
                  can help you estimate the cost of a business meeting, or the{" "}
                  <span className="link text-primary">
                    opportunity cost calculator
                  </span>{" "}
                  gives you insight into the vital concept of the opportunity
                  cost.
                </p>
              </div>

              <div className="devider h-[200px]"></div>

              <div
                ref={content}
                className="contents-sec p-10 sticky top-[0px]  "
                // onMouseEnter={() =>
                //   content.current.classList.add("overflow-y-scroll")}
                // onMouseLeave={() =>
                //   content.current.classList.remove("overflow-y-scroll")
                // }
              >
                <div id="lobor-cost">
                  <h2 className="font-bold text-3xl py-5">
                    What are labor costs?
                  </h2>
                  <p>
                    If you were running a business and reached a point where you
                    were considering hiring someone, or you already have an
                    employee, one of the first questions comes to your mind was
                    probably "How much does an employee cost?" So what is labor
                    cost?{" "}
                    <strong>
                      Labor cost is the sum of all wages paid to employees{" "}
                    </strong>{" "}
                    which include not only remunerations for the actual work but
                    also cover other expenses such as the cost of employee
                    benefits and payroll taxes paid by an employer. The
                    following list includes the most common additional expenses,
                    which can all be part of the labor cost
                  </p>
                  <ul>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Payroll taxes
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Overtime
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Health care
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Bonuses
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Sick days
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Vocation days
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Insurance
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Benfits
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Meal
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Supplies and
                    </li>
                    <li className="py-2 px-5 ml-5 list-disc text-primary">
                      Training costs
                    </li>
                  </ul>
                </div>

                <div id="direct-indirect">
                  <h2 className="font-bold text-3xl py-5">
                    Direct and indirect labor costs
                  </h2>
                  <p>
                    We can classify labor costs into direct and indirect
                    (overhead) costs. How to calculate direct labor cost? It's
                    straightforward: the direct labor cost formula consists of
                    all wages paid for employees directly involved in
                    production. In contrast, wages related to support labor and
                    production, such as employees who maintain the factory
                    equipment, are indirect costs.
                    <br />
                    Besides, labor costs can be fixed costs or variable costs.
                    For example, the labor cost related to operating machinery
                    that depends on the factory's output is a variable cost. On
                    the other hand, fixed labor costs cover employees' labor,
                    mostly with long-term contracts that don't depend much on
                    production.
                  </p>
                </div>

                <div id="calculate-cost">
                  <h2 className="font-bold text-3xl py-5">
                    How to calculate labor cost
                  </h2>
                  <p>
                    Our labor cost calculator applies the below procedure
                    explained through an example for a hypothetical restaurant.
                  </p>

                  <div>
                    <div className="mt-3">
                      <h3 className="font-bold py-3"> 1. Compute gross pay.</h3>
                      If your employees work full-time, they will typically work{" "}
                      <span className="bg-gray-300 p-1">40 hours per week</span>
                      . By multiplying the average number of weeks in a year,
                      you will get the related gross hours per year (
                      <span className="bg-gray-300 ">
                        40 × 52 = 2,080 hours
                      </span>
                      ). Let's say this employee earns{" "}
                      <span className="bg-gray-300 ">10 dollars per hour</span>.
                      Then the gross pay is equal to{" "}
                      <span className="bg-gray-300 ">
                        2,080 × 10 = 20,800 dollars per year.
                      </span>
                      <br />
                      <span className="bg-gray-300 ">
                        Gross hours per year = Gross hours per week × 52.
                      </span>
                      <br />
                      <span className="bg-gray-300 ">
                        Gross pay = Pay rate × Gross hours
                      </span>
                      <h3 className="font-bold py-3">
                        {" "}
                        2. Estimate the net hours worked in a year.
                      </h3>
                      To estimate the actual number of hours worked in a year,
                      you need to know how many days an employee is absent in a
                      year. If you would like to apply the labor cost
                      calculation on a future employee, you can take the current
                      staff's average number. For example, suppose a typical
                      employee is absent 15 days a year due to a holiday or
                      illness. In that case, you can get the yearly days of
                      absence quickly by multiplying by the daily working hours
                      (or weekly hours divided by working days), which is in the
                      present example:
                      <br />
                      <span className="bg-gray-300 ">
                        Hours not worked = 15 × 8 = 120.
                      </span>
                      <br />
                      Then subtract it from the gross hours:
                      <br />
                      <span className="bg-gray-300 ">
                        Net hours worked = Gross hours – Hours not worked =
                        2,080 - 120 = 1,960.
                      </span>
                      <h3 className="font-bold py-3">
                        {" "}
                        3. Sum additional annual costs.
                      </h3>
                      As we stated at the beginning, to get the real labor cost,
                      you need to include all related expenses related to
                      employment. Other annual costs = Taxes + Insurance +
                      Benefits + Overtime + Supplies
                      <h3 className="font-bold py-3">
                        {" "}
                        4. Compute annual payroll labor cost.
                      </h3>
                      After computing all the above components, we finally
                      arrive at the main labor cost formula, which tells us how
                      much an employee costs in a year:
                      <span className="bg-gray-300 ">
                        Annual payroll labor cost = Gross pay + Other annual
                        costs
                      </span>
                      Let's say the additional costs are 3,900 dollars per year.
                      To get the annual labor cost, you need to add this to the
                      Gross pay, which was 20,800 dollars:{" "}
                      <span className="bg-gray-300">
                        20,800 + 3,900 = 24,700.
                      </span>
                      <h3 className="font-bold py-3">
                        {" "}
                        5. Estimate actual hourly labor cost.
                      </h3>
                      You can also estimate the actual hourly labor cost by
                      dividing the Annual payroll labor cost by the worked
                      hours.
                      <span className="bg-gray-300">
                        Actual hourly labor cost = Annual payroll labor cost /
                        Net hours worked
                      </span>
                      So how much does labor cost per hour in our example?
                      Recall that the net hours worked in a year was 1,960
                      hours. Dividing the 24,700 dollars payroll cost by the new
                      hours worked, we get a 12.60 dollars actual hourly labor
                      cost.
                      <h3 className="font-bold py-3">
                        {" "}
                        6. Approximate labor cost percentage.
                      </h3>
                      For a better insight into how much an employee costs, you
                      can also check the labor cost percentage, which is the
                      relationship between your labor cost and your total
                      revenue over a period. So how to calculate the labor cost
                      percentage? Just apply the following labor cost percentage
                      formula to get the answer.
                      <span className="bg-gray-300">
                        Labor cost percentage = Annual payroll labor cost /
                        Total revenue
                      </span>
                      If our hypothetical restaurant's revenue is, let's say,
                      80,000 dollars in a year, the Labor cost percentage is{" "}
                      <span className="bg-gray-300">
                        24,700 / 80,000 = 30.9 %.
                      </span>
                      Note that the acceptable labor cost percentages are around
                      25 and 40 percent for a restaurant. The ratio varies by
                      industry, however. For example, businesses in the service
                      sector might expect the ratio to be 50 percent or more,
                      but the figure may be under 30 percent in the
                      manufacturing sector.
                    </div>
                  </div>
                </div>

                <div id="faq" className="FAQ mt-7">
                  <div>
                    <h2 className="font-bold text-3xl py-5">
                      How to reduce labor costs?
                    </h2>
                    <p>To reduce labor costs:</p>
                    <ul>
                      <li className="py-2 px-5 ml-5 list-disc text-primary">
                        Avoid overtime
                      </li>
                      <li className="py-2 px-5 ml-5 list-disc text-primary">
                        Reduce employee turnover rate;
                      </li>
                      <li className="py-2 px-5 ml-5 list-disc text-primary">
                        Offer commissions instead of a high base salary; and
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div
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

      <div className="flex flex-col lg:flex-row justify-around border-b border-gray-300">
        <div>
          <div className="flex justify-center social pt-14 gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,256,256"
            >
              <g
                fill="#4ebee1"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                // style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM26.58008,10c-2.65186,0 -4.663,0.86722 -5.90234,2.40039c-1.23934,1.53317 -1.67773,3.58065 -1.67773,5.82617v1.77344h-2c-0.55226,0.00006 -0.99994,0.44774 -1,1v5c0.00006,0.55226 0.44774,0.99994 1,1h2v12c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-12h4c0.47687,-0.00017 0.88729,-0.33701 0.98047,-0.80469l1,-5c0.05844,-0.29363 -0.01774,-0.598 -0.20762,-0.82948c-0.18987,-0.23148 -0.47346,-0.36572 -0.77285,-0.36584h-5v-2.19336c0,-0.48502 0.03137,-0.48103 0.17188,-0.57227c0.14051,-0.09124 0.64832,-0.23437 1.53906,-0.23437h3.28906c0.55226,-0.00006 0.99994,-0.44774 1,-1v-4c-0.00023,-0.42258 -0.26605,-0.79942 -0.66406,-0.94141c0,0 -2.8796,-1.05859 -5.75586,-1.05859zM26.58008,12c1.89242,0 3.64742,0.51045 4.41992,0.75195v2.24805h-2.28906c-1.04726,0 -1.89696,0.08458 -2.62695,0.55859c-0.72999,0.47401 -1.08398,1.38207 -1.08398,2.24805v3.19336c0.00006,0.55226 0.44774,0.99994 1,1h4.7793l-0.59961,3h-4.17969c-0.55226,0.00006 -0.99994,0.44774 -1,1v12h-4v-12c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1h-2v-3h2c0.55226,-0.00006 0.99994,-0.44774 1,-1v-2.77344c0,-1.97948 0.40501,-3.54478 1.23242,-4.56836c0.82741,-1.02358 2.10451,-1.6582 4.34766,-1.6582z"></path>
                </g>
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#03A9F4"
                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="2Kwn75UM7U5wuXsmTmjBBa_6zadLh4Adjrp_gr1"
                x1="14.101"
                x2="34.491"
                y1="6.854"
                y2="42.171"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ea504d"></stop>
                <stop offset=".736" stop-color="#e83e3b"></stop>
                <stop offset="1" stop-color="#e73634"></stop>
              </linearGradient>
              <path
                fill="url(#2Kwn75UM7U5wuXsmTmjBBa_6zadLh4Adjrp_gr1)"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              ></path>
              <path
                fill="#fff"
                d="M24,37c-7.168,0-13-5.832-13-13s5.832-13,13-13s13,5.832,13,13S31.168,37,24,37z M24,12	c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S30.617,12,24,12z"
              ></path>
              <polygon fill="#fff" points="20,18 20,30 30,24"></polygon>
            </svg>
          </div>

          <div className="py-8 flex justify-center">
            <button className="btn cal-btn text-white px-8 hover:text-black rounded-full">
              Other Finance Calculator
            </button>
          </div>
        </div>
        <div className="pt-10 flex gap-4 justify-center">
          <div className="">
            <ul className="w-[80%]">
              <li className="py-4 cursor-pointer text-primary font-semibold">
                About Omni Calculator
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Editorial policies{" "}
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Press kit{" "}
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Journalist's Guide to Numbers{" "}
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Partnerships
              </li>
            </ul>
          </div>

          <div>
            <ul className="w-[80%]">
              <li className="py-4 cursor-pointer text-primary font-semibold">
                About Omni Calculator
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Editorial policies{" "}
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Press kit{" "}
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Journalist's Guide to Numbers{" "}
              </li>
              <li className="py-4 cursor-pointer text-primary font-semibold">
                Partnerships
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="p-16 h-48">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between px-5">
          <div>
            <p className="text-center">Copyright Omni Calculator sp. z o . o</p>
          </div>
          <div className="links mx-auto lg:mx-2 my-5 lg:my-1">
            <Link href={"#"} className="link">
              Privacy ,
            </Link>
            <Link href={"#"} className="link">
              Cookies &
            </Link>
            <Link href={"#"} className="link">
              Terms of service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
