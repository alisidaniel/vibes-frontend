import React, { useState, useContext, useEffect } from "react";
export default function Login2() {
  return (
    <div className="w-full h-screen p-10" id="body">
      <div className="flex justify-center items-center">
        <div className="w-96 h-24" id="login">
          <form>
            <div>
              <label>Username</label>
              <input placeholder="Daniel" />
            </div>
            <div>
              <label>Username</label>
              <input placeholder="Daniel" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
