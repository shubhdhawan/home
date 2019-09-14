import React, { Component } from "react";
import { Layout, Button, Row, Icon, Input,Card } from "antd";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import * as pageActions from "../../data/redux/page_details/actions";

import "./index.scss";
import "../../data/styles/common.scss";
import { assets } from "../../data/assets/assetsurl";
import ColumnComponent from "./components/colcomponent";
import PageHeader from "./components/pageheader";
import Meta from "antd/lib/card/Meta";

const { Footer, Content } = Layout;


function mapStateToProps(state) {
  return {
    page_details: state.page_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, pageActions), dispatch)
  };
}

class Home extends Component {
  navigateTo = path => {
    this.props.history.push(path);
  };

  render() {
    const { page_details, actions } = this.props;
    const show_menu = page_details.show_menu;
    const is_mobile = page_details.device_data.screen_width < 768;

    const heading1 = "Your virtual collaborative working environment";
    const text1 =
      "Weaverse workplaces streamline systems from multiple facets of work into a single unified unit easily accessible by both the consumer and the employee. Decreasing costs as well as increasing efficiency, due to the single system, is an instantaneous advantage.";
    const heading2 =
      "Workflow overload...communication isn't easy for Businesses";
    const text2 =
      "A Weaverse workplace is easier for employees because it often reduces business travel, consolidates services, and assists in the communication process.<br> It is a collaboration hub for work, no matter what work you do. It's a place where conversations happen, decisions are made, and information is always at your fingertips";
    let headingClass = "wea-font-ultra-bold wea-font-lg";
    if (is_mobile)
      headingClass = "wea-font-ultra-bold wea-font-md wea-text-center";
    let textClass = "wea-text-center";
    if (is_mobile) textClass = "wea-text-center wea-font-xs";

    return (
      <div className="homepageContainer">
        {!is_mobile && (
          <Layout className="layout">
            <PageHeader
              orientation={"horizontal"}
              navigateTo={this.navigateTo}
              show_menu
            />

            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              <div>
                <Row className="wea-flex wea-flex-ac wea-tb-pad-15 wea-flex-wrap wea-tb-mrgn-15">
                  <ColumnComponent
                    col_span={12}
                    heading={"Your virtual collaborative working environment"}
                    text={
                      "Weaverse workplaces streamline systems from multiple facets of work into a single unified unit easily accessible by both the consumer and the employee. Decreasing costs as well as increasing efficiency, due to the single system, is an instantaneous advantage."
                    }
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    show_img={false}
                    textClass={"wea-text-center"}
                    colClass={"wea-full-parent-height wea-pad-8"}
                  />
                  <ColumnComponent
                    col_span={12}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.First}
                  />
                </Row>
                <Row className="wea-flex wea-flex-wrap wea-flex-ac wea-tb-pad-15 wea-tb-mrgn-15">
                  <div className="wea-lr-mrgn-15" style={{ width: "500px" }}>
                    <Input size="large" placeholder="Enter Email ID" />
                  </div>
                  <div>
                    <Button size="large" className="wea-bg-primary-light">
                      Request Demo
                    </Button>
                  </div>
                </Row>
                <Row className="wea-flex wea-flex-wrap wea-flex-ac wea-tb-pad-15 wea-tb-mrgn-15">
                  <ColumnComponent
                    col_span={12}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.Second}
                  />
                  <ColumnComponent
                    col_span={12}
                    heading={
                      "Workflow \n overload... communication isn't easy for Businesses"
                    }
                    text={
                      "A Weaverse workplace is easier for employees because it often reduces business travel, consolidates services, and assists in the communication process.<br> It is a collaboration hub for work, no matter what work you do. It's a place where conversations happen, decisions are made, and information is always at your fingertips"
                    }
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    textClass={""}
                    colClass={"wea-tb-mrgn-15 wea-full-parent-height wea-pad-8"}
                  />
                </Row>
                <Row>
                  <ColumnComponent show_img={true} show_upper_img={false} />
                </Row>
              </div>
            </Content>

            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
               
    
                <Row className="wea-flex wea-flex-wrap wea-flex-ac wea-tb-pad-15 wea-tb-mrgn-15">
                  <ColumnComponent
                    col_span={12}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.Third}
                  />
                  <ColumnComponent
                    col_span={12}
                    heading={
                      "Weaverse to the rescue"
                    }
                    text={
                      "Weaverse enables Businesses to seamlessly communicate internally and externally allowing transparent management and enhancing operational efficiency"
                    }
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    textClass={""}
                    colClass={"wea-tb-mrgn-15 wea-full-parent-height wea-pad-8"}
                  />
                </Row>
                <Row>
                  <ColumnComponent show_img={true} show_upper_img={false} />
                </Row>
              </div>
           
              <div>
               
    
                <Row className="wea-flex wea-flex-wrap wea-flex-ac wea-tb-pad-15 wea-tb-mrgn-15">
                 
                  <ColumnComponent
                    col_span={12}
                    heading={"All your conversations at one place..."}
                    text={"Full communicational control and transparency in one easy to use communication platform"}
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    show_img={false}
                    textClass={""}
                    colClass={"wea-full-parent-height wea-pad-8"}
                    
                  />
                   <ColumnComponent
                    col_span={12}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.Fourth}
                  />
                </Row>
                <Row>
                  <ColumnComponent show_img={true} show_upper_img={false} />
                </Row>
              </div>
            </Content>

            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
              <Row type="flex" justify="center" align="top">
                <ColumnComponent
               col_span={6}
                col_span={12}
                  heading={"Your New Workplace"}
                  headingClass={"wea-font-ultra-bold wea-font-xl"}
              col_span={6}
              />
              </Row>
               <Row type="flex" justify="center" align="top">
               <ColumnComponent
                 show_img={true}
                 show_upper_img={true}
                imgClass={"wea-img-contain"}
                imgsrc={assets.Fifth} 
             
              />
             </Row>
               </div>
            </Content>

            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
              <Row type="flex" justify="center" align="top">
                <ColumnComponent
               col_span={4}
                col_span={16}
                  heading={"Features"}
                  headingClass={"wea-font-ultra-bold wea-font-xl"}
              col_span={4}
              />
              </Row>
               <Row type="flex"  align="top" gutter={48}>
               <ColumnComponent
                  col_span={12}
                 show_img={true}
                 show_upper_img={true}
                imgClass={"wea-img-contain"}
                imgsrc={assets.Sixth} 
             
              />
              
               <ColumnComponent
                 col_span={4}
                 show_img={true}
                 show_upper_img={true}
                imgClass={"wea-img-contain"}
                imgsrc={assets.logo} 
                heading={"Dashboard"}
                headingClass={"wea-text-center"}
               
                />
                 <ColumnComponent
                col_span={4}
                show_img={true}
                show_upper_img={true}
               imgClass={"wea-img-contain"}
               imgsrc={assets.logo} 
               heading={"Translation"}
               headingClass={"wea-text-center"}
            />
                <ColumnComponent
               col_span={4}
               show_img={true}
               show_upper_img={true}
              imgClass={"wea-img-contain"}
              imgsrc={assets.logo} 
              heading={"Workspaces"}
              headingClass={"wea-text-center"}
              />
              {/* unfinished */}
              
             </Row>
               </div>
            </Content>

            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
              <Row className="wea-flex wea-flex-ac wea-tb-pad-15 wea-flex-wrap wea-tb-mrgn-15">
                  <ColumnComponent
                    col_span={12}
                    heading={"We know our Customers"}
                    text={
                      "They're manufacturers.They're marketers.They're sellers... They communicate with teams.And they're everywhere"
                    }
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    show_img={false}
                    textClass={"wea-text-center"}
                    colClass={"wea-full-parent-height wea-pad-8"}
                    />
              </Row>
               <Row type="flex"  align="top" gutter={48}>
               <ColumnComponent
                  col_span={12}
                 show_img={true}
                 show_upper_img={true}
                imgClass={"wea-img-contain"}
                imgsrc={assets.Seventh} 
             
              />
              
               <ColumnComponent
                 col_span={3}
                 show_img={true}
                 show_upper_img={true}
                imgClass={"wea-img-contain"}
                imgsrc={assets.logo} 
                heading={"Academics"}
                headingClass={"wea-text-center"}
               
                />
                 <ColumnComponent
                col_span={3}
                show_img={false}
                show_upper_img={false}
               
               
            />
                 <ColumnComponent
                col_span={3}
                show_img={true}
                show_upper_img={true}
               imgClass={"wea-img-contain"}
               imgsrc={assets.logo} 
               heading={"Manufacturing"}
               headingClass={"wea-text-center"}
            />
                
              {/* unfinished */}
              
             </Row>
             <Row className="wea-flex wea-flex-ac wea-tb-pad-15 wea-flex-wrap wea-tb-mrgn-15">
               <ColumnComponent
                  col_span={12}
                 show_img={true}
                 show_upper_img={true}
                imgClass={"wea-img-contain"}
                imgsrc={assets.Eight} 
             
              />

                  <ColumnComponent
                   
                   col_span={12}
                    heading={"Doesn't matter what your goal... We will help achieve your goal!"}
                   
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    show_img={false}
                    textClass={"wea-text-center"}
                    colClass={"wea-full-parent-height wea-pad-8"}
                    />
              </Row>
               </div>
            </Content>

            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
              <Row type="flex" justify="center" align="top">
                <ColumnComponent
               col_span={4}
                col_span={16}
                  heading={"Pricing"}
                  headingClass={"wea-font-ultra-bold wea-font-xl"}
              col_span={4}
              />
              </Row>
               <Row type="flex"  align="top" gutter={48}>
               
              <ColumnComponent>
              col_span={6}
               <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" src="" />}
                                                                                                           >
                 <Meta title="" description="" />
                 </Card>
                 </ColumnComponent>
                 <ColumnComponent>
                 col_span={6}
                 <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" src="" />}
                                                                                                           >
                 <Meta title="" description="" />
                 </Card>
                 </ColumnComponent>
                 <ColumnComponent>
                 col_span={6}
                 <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" src="" />}
                                                                                                           >
                 <Meta title="" description="" />
                 </Card>
                 </ColumnComponent>
  
             
              
              </Row>
              </div>
               </Content>
            
            
            

            <Footer style={{ textAlign: "left", marginTop: "50px", wordSpacing: "30px" }}>
              PrivacyPolicy  Terms&Conditions  ContactUs  Product  Services  Customers
            </Footer>
          </Layout>
        )}

        {is_mobile && (
          <a
            href="#"
            style={{
              position: "fixed",
              top: "60px",
              left: "10px",
              zIndex: "10"
            }}
            onClick={() => actions.showMenu(!show_menu)}
          >
            <Icon
              type="menu-unfold"
              style={{ fontSize: "30px", color: "black" }}
            />
          </a>
        )}

        {is_mobile && (
          <Layout className="layout wea-full-width">
            <PageHeader
              orientation={"vertical"}
              navigateTo={this.navigateTo}
              show_menu={show_menu}
            />
            <Content style={{ marginTop: 64, backgroundColor: "white" }}>
              <div>
                <Row className="wea-flex wea-flex-ac wea-lr-pad-10 wea-tb-pad-15 wea-flex-wrap wea-tb-mrgn-15">
                  <ColumnComponent
                    is_mobile
                    col_span={22}
                    heading={heading1}
                    text={text1}
                    headingClass={headingClass}
                    show_img={false}
                    textClass={textClass}
                    colClass={"wea-full-parent-height wea-pad-8"}
                  />
                  <ColumnComponent
                    col_span={22}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.First}
                  />
                </Row>
                <Row className="wea-lr-pad-10 wea-flex wea-flex-ac wea-tb-pad-15 wea-tb-mrgn-15">
                  <div style={{ maxWidth: "500px" }}>
                    <Input
                      size={!is_mobile && "large"}
                      placeholder="Enter Email ID"
                    />
                  </div>
                  <div>
                    <Button
                      size={!is_mobile && "large"}
                      className="wea-bg-primary-light"
                    >
                      Request Demo
                    </Button>
                  </div>
                </Row>
                <Row className="wea-flex wea-flex-wrap wea-flex-ac wea-lr-pad-10 wea-tb-pad-15 wea-tb-mrgn-15">
                  <ColumnComponent
                    col_span={22}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.Second}
                  />
                  <ColumnComponent
                    is_mobile
                    col_span={22}
                    heading={heading2}
                    text={text2}
                    headingClass={headingClass}
                    textClass={textClass}
                    colClass={"wea-tb-mrgn-15 wea-full-parent-height wea-pad-8"}
                  />
                </Row>
                <Row>
                  <ColumnComponent show_img={true} show_upper_img={false} />
                </Row>
              </div>
            </Content>

            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
               
    
                <Row className="wea-flex wea-flex-wrap wea-flex-ac wea-tb-pad-15 wea-tb-mrgn-15">
                  <ColumnComponent
                    col_span={12}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.Third}
                  />
                  <ColumnComponent
                     is_mobile
                    col_span={12}
                    heading={
                      "Weaverse to the rescue"
                    }
                    text={
                      "Weaverse enables Businesses to seamlessly communicate internally and externally allowing transparent management and enhancing operational efficiency"
                    }
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    textClass={""}
                    colClass={"wea-tb-mrgn-15 wea-full-parent-height wea-pad-8"}
                  />
                </Row>
                <Row>
                  <ColumnComponent show_img={true} show_upper_img={false} />
                </Row>
              </div>
            </Content>

            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
               
    
                <Row className="wea-flex wea-flex-wrap wea-flex-ac wea-tb-pad-15 wea-tb-mrgn-15">
                  <ColumnComponent
                   
                  />
                  <ColumnComponent
                    col_span={12}
                    is_mobile
                    heading={"All your conversations at one place..."}
                    text={"Full communicational control and transparency in one easy to use communication platform"}
                    headingClass={"wea-font-ultra-bold wea-font-xl"}
                    show_img={false}
                    textClass={""}
                    colClass={"wea-full-parent-height wea-pad-8"}
                    
                  />
                   <ColumnComponent
                    col_span={12}
                    show_img={true}
                    show_upper_img={true}
                    imgClass={"wea-img-contain"}
                    imgsrc={assets.Fourth}
                  />
                </Row>
                <Row>
                  <ColumnComponent show_img={true} show_upper_img={false} />
                </Row>
              </div>
            </Content>
            <Content style={{ padding: "0 50px", marginTop: 4 }}>
              <div>
              <Row type="flex" justify="center" align="top">
                <ColumnComponent
                is_mobile
               col_span={6}
                col_span={12}
                  heading={"Your New Workplace"}
                  headingClass={"wea-font-ultra-bold wea-font-xl"}
              col_span={6}
              />
              </Row>
               <Row type="flex" justify="center" align="top">
               <ColumnComponent
                  
                 show_img={true}
                 show_upper_img={true}
                imgClass={"wea-img-contain"}
                imgsrc={assets.Fifth} 
             
              />
             </Row>
               </div>
            </Content>
            

            <Footer style={{ textAlign: "center", marginTop: "50px", wordSpacing: "10px" }}>
            PrivacyPolicy  Terms&Conditions  ContactUs  Product  Services  Customers
            </Footer>
          </Layout>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
  page_details: PropTypes.object,
  actions: PropTypes.func
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(Home)
);
