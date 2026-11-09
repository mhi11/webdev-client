"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";

const sayHello = (message: string) => {
  alert(message);
};

const sayName = () => {
  alert("Max");
};

const sayOther = () => {
  alert("Sample from parent");
};

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <hr />

      <ClickEvent />
      <PassingDataOnEvent />

      <PassingFunctions
        message="Hello World!"
        theFunction={sayHello}
        theFunction2={sayName}
        theOtherFunction={sayOther}
      />

      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />

      <ProfileForm />

      <ParentStateComponent />
      <PropDrilling />

      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />

      <Effect />
    </div>
  );
}
