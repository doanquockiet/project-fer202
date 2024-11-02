import React, { Component } from "react";
import "./layout.css";
import Header from "./Header";
import Footer from "./Footer";
class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {/* Header */}

        <header className="layout-header">
          <Header />
        </header>

        {/* Main content area */}
        <div className="layout-content">
          {/* Left Sidebar */}
          <aside className="layout-sidebar-left">
            <p>Left Content</p>
          </aside>

          {/* Center Content */}
          <main className="layout-main">
            <p>Center Content</p>
          </main>

          {/* Right Sidebar */}
          <aside className="layout-sidebar-right">
            <p>Right Content</p>
          </aside>
        </div>

        {/* Footer */}
        <footer className="layout-footer">
          {/* <p>Footer</p> */}
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Layout;
