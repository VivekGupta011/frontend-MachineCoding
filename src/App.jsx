import Calculator from "./Components/calculator/Calculator";
import CrudApp from "./Components/crudOperation/CrudApp";
import CssPractise from "./Components/CssPractise";
import Dropdown from "./Components/dropdownWithNested/Dropdown";
import EcommerceCartFunc from "./Components/Ecommerce/EcommerceCartFunc";
import EmployeeApp from "./Components/EmployeeData/Employe";
import Faq from "./Components/Faq";
import Faqs from "./Components/Faqs";
import CenteredForm from "./Components/formValidation/Form";
import GridLights from "./Components/gridLights/gridLights";
import GridLightsGame from "./Components/gridLights/gridLightsOptimizedLevelUp";
import ImageCarousel from "./Components/ImageCarousel";
import Inputfied from "./Components/Inputfied";
import MultiStepForm from "./Components/MultiStepForm";
import CounterCustomHooks from "./Components/ReactDesignPattern/CounterCustomHooks";
import HocFunc from "./Components/ReactDesignPattern/HOC/HocFunc";
import ReactHooks from "./Components/ReactDesignPattern/ReactHooks(CustomHooks)";
import ReactRenderProps from "./Components/ReactDesignPattern/ReactRenderProps";
// import ReactTabUsingComposition from "./Components/ReactDesignPattern/ReactTabUsingComposition&CompoundComponents/main";
import ShoppingListApp from "./Components/shoppingList/ShoppingListAppUsingUseEffect";
import TwoFactorCodeInput from "./Components/SnakeGame/Otp";
import SnakeGame from "./Components/SnakeGame/Snake";
import ThemeToggle from "./Components/Theme";
import Update from "./Components/Update";

function App() {
  return (
    <>
      {/* <Inputfied/> */}
      {/* <Faq/> */}
      {/* <Faqs/> */}
      {/* <ImageCarousel/> */}
      {/* <MultiStepForm/> */}
      {/* <ShoppingListApp/> */}
      {/* <CrudApp/> */}
      {/* <SnakeGame/> */}
      {/* <TwoFactorCodeInput/> */}
      {/* <ThemeToggle/> */}
      {/* https://github.com/VivekGupta011/E-Commerce-Advance-Filtering  please also use this for prepareation */}
      {/* https://github.com/VivekGupta011/Drag-funtionality  please also use this for prepareation */}
      {/* <EmployeeApp/> */}
      {/* <EcommerceCartFunc/> */}
      {/* <Update/> */}
      {/* <CssPractise/> */}

      {/* React Design Pattern */}
      {/* <ReactRenderProps
        render={({ x, y }) => {
          return (
            <div>
              <h1>Move Your Mouse around!</h1>
              <h2>
                Mouse Postion:({x},{y})
              </h2>
              <p>The background color changes based on your mouse position!</p>
            </div>
          );
        }}
      /> */}

      {/* <CounterCustomHooks/> */}
      {/* HOC */}
      {/* <HocFunc/> */}
      {/* <Calculator/> */}
      {/* <Dropdown/> */}
      {/* <CenteredForm/> */}
      {/* <GridLights/> */}
      <GridLightsGame/>

      {/* <ReactTabUsingComposition/>  solve any error*/} 

    </>
  );
}

export default App;
