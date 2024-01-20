"use client";
import { useState } from "react";
import Card from "./component/Card/index";
import Image from "next/image";
import Card4 from "./component/Card4";
export default function Home() {
  const [status, setStatus] = useState("nextButton");

  const onPre = () => {
    setStatus("nextButton");
    const cardListBox: any = document.querySelector(".cardListBox");
    cardListBox.style.transform = `translateX(0)`;
  };
  const onNext = () => {
    setStatus("preButton");
    const cardListBox: any = document.querySelector(".cardListBox");
    cardListBox.style.transform = `translateX(-540px)`;
  };
  return (
    <>
      <div className="pageBox">
        <div className="cardListBox">
          <Card
            cardIndex={1}
            xianColor="syntax"
            theme={{
              title: "Introduction to programming",
              tagList: ["Beginner"],
            }}
            notes=" This course covers the most basic concepts in programming using
        Solidity as an example."
          />
          <Card
            cardIndex={2}
            theme={{
              title: "Moonshot 2023 Summer Hackathon",
              tagList: ["All Tracks", "Solidity", "ZK"],
            }}
            list={[
              { leftFont: "Signup", rightFont: "4/15 - 6/15" },
              { leftFont: "Event", rightFont: "6/15 - 7/15" },
              { leftFont: "Grant size", rightFont: "200K" },
            ]}
            footer={false}
          />
          <Card
            cardIndex={3}
            xianColor="learning-track"
            theme={{
              title: "Web 3.0 Programming Basics",
              tagList: ["Beginner"],
            }}
            notes="Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure."
            footer={{
              isHideCompleted: true,
            }}
          />
          <Card4 />
        </div>
        <div className={`buttonBox ${status === "preButton" ? "pre" : "next"}`}>
          {status === "preButton" && (
            <Image
              src="/previous.svg"
              onClick={onPre}
              className="preButton"
              alt="preButton"
              width={48}
              height={48}
            />
          )}
          {status === "nextButton" && (
            <Image
              src="/next.svg"
              onClick={onNext}
              className="nextButton"
              alt="nextButton"
              width={48}
              height={48}
            />
          )}
        </div>
      </div>
    </>
  );
}
