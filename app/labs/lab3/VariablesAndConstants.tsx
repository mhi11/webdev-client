export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  let name = "john doe";
  const nameGreeting = "hello, " + name;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      name = {name}                     <br />
      nameGreeting = {nameGreeting}      <br />
      sampleSum = {sampleSum}

      <hr />
    </div>
  );
}