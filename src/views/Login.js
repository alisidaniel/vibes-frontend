import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Labelled } from "@wigxel/react-components/lib/form";
// import { useForm } from "react-hook-form";

export default function Login() {
  return (
    <div>
      <form>
        <hgroup className="text-center mb-8">
          <H1 bold className="text-_2">
            Welcome back!
          </H1>
          <P>
            <span className="text-xs text-_2">
              Enter your login details to gain access to your account.
            </span>
          </P>
        </hgroup>
      </form>
    </div>
  );
}
