import { useState } from "react";

import Posts from "./pages/Posts";
import Users from "./pages/Users";

import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import {
  CDBModalFooter,
  // CDBLink,
  CDBBox,
  CDBBtn,
  // CDBIcon,
  // CDBContainer,
} from "cdbreact";
import SearchLogo from "./assets/images/searchLogo.png";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <div>
        <h1>Welcome to MERN search</h1>
      </div>
      <div className="search">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search the table..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="paragraph">
        <Form.Control
          type="text"
          placeholder={
            searchTerm ? searchTerm : "Your search word will be displayed here."
          }
          readOnly
        />
      </div>

      <Tabs defaultActiveKey="users" className="mb-3">
        <Tab eventKey="users" title="Users">
          <Users searchTerm={searchTerm} />
        </Tab>
        <Tab eventKey="posts" title="Posts">
          <Posts searchTerm={searchTerm} />
        </Tab>
      </Tabs>

      <br />
      <br />

      <CDBModalFooter className="shadow" style={{ color: "white" }}>
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: "80%" }}
        >
          <CDBBox display="flex" alignItems="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src={SearchLogo}
                width="70px"
                style={{
                  marginRight: -15,
                  // , backgroundColor: "white"
                }}
              />
              <span
                className=" h5 mb-0 font-weight-bold"
                style={{
                  marginRight: 15,
                  // , color: "white"
                }}
              >
                MERN search
              </span>
            </a>
            <small className="ml-2">
              &copy; Abdulhakeem Muhammed, 2023. All rights reserved.
            </small>
          </CDBBox>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              {/* <CDBIcon fab icon="facebook-f" /> */}
              {/* <CDBLink href="https://muhammed-abdulhakeem.netlify.app/"> */}
              <a
                href="https://muhammed-abdulhakeem.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
              {/* </CDBLink> */}
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              {/* <CDBIcon fab icon="twitter" /> */}
              {/* <CDBLink href="https://github.com/ennas-de"> */}
              <a
                href="https://github.com/ennas-de"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {/* </CDBLink> */}
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              {/* <CDBIcon fab icon="instagram" /> */}
              {/* <CDBLink href="https://www.linkedin.com/in/abdulhakeem-muhammed-ibiyemi/"> */}
              <a
                href="https://www.linkedin.com/in/abdulhakeem-muhammed-ibiyemi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {/* </CDBLink> */}
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBModalFooter>
    </div>
  );
}

export default App;
