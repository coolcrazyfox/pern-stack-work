import React, {Fragment, useState} from "react";
import "./App.css";
// import CssBaseline from "@mui/material/CssBaseline";
// import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Container from "@mui/material/Container";
// import TabPage from "./pages/TabPage";
import ListDevice from "./components/ListDevice";


// https://webtricks-master.ru/react-hooks/uchim-usecontext-na-primerah/
// https://highload.today/paginatsiya-v-react-poleznyj-kastomnyj-huk/
// https://youtu.be/s59kRbD4Sw8

function App() {
  const [itemCarList, setItemCarList]=useState([])
  return (
    <Fragment>
      {/*<div className="main_container">*/}
             {/*<TabPage*/}
             {/*    oemList={itemCarList}*/}
             {/*/>*/}
          {/*<ListDevice />*/}

      {/*</div>*/}
      {/*<CssBaseline />*/}
      <Container maxWidth="md">
      {/*  /!*<InputTodo />*!/*/}
        <ListTodos />
      </Container>
    </Fragment>
  );
}

export default App;
