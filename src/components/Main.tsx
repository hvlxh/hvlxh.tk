"use client";

import { useState, useEffect } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";

export default function Main() {
  const [isVisible, setIsVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, I'm hvlxh.";
  const [updatedText, setUpdatedText] = useState("Hitesh");
  const [isDetypeAnimation, setIsDetypeAnimation] = useState(false);
  const [isUpdatedTextTyping, setIsUpdatedTextTyping] = useState(false);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  let id: number;
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((visible) => !visible);
    }, 500); // Change the duration as needed

    id = interval;
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;

    const intervalId = setInterval(() => {
      if (isTyping) {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          isTyping = false;
          setIsDetypeAnimation(true); // Start detyping animation
        }
      } else {
        if (currentIndex >= 11) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex--;
        } else {
          setIsVisible((visible) => !visible);
          setIsDetypeAnimation(false); // End detyping animation
          setIsUpdatedTextTyping(true); // Start typing animation for updatedText
        }
      }
    }, 150); // Adjust the interval speed as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (isUpdatedTextTyping && !isAnimationRunning) {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex <= updatedText.length) {
          setTypedText(
            fullText.substring(0, 11) + updatedText.substring(0, currentIndex)
          );
          currentIndex++;
        } else {
          setIsUpdatedTextTyping(false); // End typing animation for updatedText
          setIsAnimationRunning(true); // Mark the entire animation as completed
          document.getElementById("typing")?.remove();

          const element = document.getElementById("subtitle");
          element?.classList.remove("text-[rgba(0,0,0,0)]");
          element?.classList.add("text-gray-400");

          const element2 = document.getElementById("socials");
          element2?.classList.remove("text-[rgba(0,0,0,0)]");
          element2?.classList.add("text-gray-300");

          const element3 = document.getElementById("container");
          element3?.classList.add("bg-black/80");

          const element4 = document.getElementById("control");
          element4?.classList.remove("text-[rgba(0,0,0,0)]");
          element4?.classList.add("text-gray-500");

          const element5 = document.getElementById("line");
          element5?.classList.remove("border-b-white/0");
          element5?.classList.add("border-gray-500");
        }
      }, 150); // Adjust the interval speed as needed

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isUpdatedTextTyping, isAnimationRunning]);

  return (
    <div className={`absolute inset-0 flex h-screen bg-opacity-5`}>
      <div
        id="container"
        className="m-auto rounded-lg text-center duration-500"
      >
        <div
          id="control"
          className="flex items-center justify-end pr-2 pt-2 text-[rgba(0,0,0,0)]"
        >
          <button className="hover:text-white">
            <VscChromeMinimize />
          </button>
          <button className="ml-6 hover:text-white">
            <VscChromeMaximize />
          </button>
          <button className="ml-6 hover:text-white">
            <VscChromeClose />
          </button>
        </div>

        <div
          id="line"
          style={{ borderBottomWidth: "1px" }}
          className="flex justify-center border-b-white/0 pb-2"
        ></div>

        <div className="mt-5 flex px-10">
          <h1 className="text-4xl font-semibold sm:text-6xl">{typedText}</h1>
          <div
            id="typing"
            className={`border-l-2 border-gray-400 transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            } ml-2`}
          ></div>
        </div>
        <p
          id="subtitle"
          className="mb-2 mt-1 text-sm font-medium text-[rgba(0,0,0,0)] duration-500 sm:text-lg"
        >
          Software, Full Stack Web Developer
        </p>
        <ul
          id="socials"
          className="inline-flex items-center pb-5 text-center text-[rgba(0,0,0,0)] duration-500"
        >
          <a
            href={"https://github.com/hvlxh"}
            className="duration-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mx-3" size={34} />
          </a>

          <a
            href={"https://discord.com/users/879776205660880926"}
            className="duration-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="mx-3" size={34} />
          </a>

          <a
            href={"mailto:monsta22019@gmail.com"}
            className="duration-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail className="mx-3" size={34} />
          </a>
        </ul>
      </div>
    </div>
  );
}
