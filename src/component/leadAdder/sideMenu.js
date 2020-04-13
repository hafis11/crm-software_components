import React from 'react';
import '../leadAdder/sideMenu.css'
import { Drawer, Button, Tabs ,Form ,Input,Select,DatePicker} from 'antd';
import { CustomerServiceFilled ,ContactsFilled ,InfoCircleFilled ,PushpinFilled ,EnvironmentFilled, BulbFilled} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;
class SideMenu extends React.Component {
  state = {
       visible: false,
       activeTab: "1"
    };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  changeTab = activeKey => {
    this.setState({
      activeTab: activeKey
    });
  };

  render() {
    
    return (
      <div class="pr-5">
        <div class="bg-primary lead-button d-flex justify-content-center align-items-center rounded"type="button" onClick={this.showDrawer}><h4 class="m-3 text-light font-weight-bold mb-0">ADD</h4></div>
        <Drawer
          width={"60vw"}
          bodyStyle={{padding:0}}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <Tabs tabPosition={'left'} tabBarStyle={{marginTop:180}} activeKey={this.state.activeTab} onChange={this.changeTab}>
        <TabPane  tab={<span><ContactsFilled className="iconsize"/></span>} key="1">
                {/* lead adding input */}
            <div className="formcondent">
                <h1>Add Customer Info</h1>
            <Form  layout="inline" className="inputform1">
                <div className="formbox">
                    <div className="form">
                    <Form.Item label="FIRST NAME"/>
                    <Input placeholder="First name" className="inputbar"/>
                    </div>
                    <div className="form">
                    <Form.Item label="LAST NAME"/>
                    <Input placeholder="Last name" className="inputbar"/>
                    </div>
                </div>
                <div className="formbox">
                    <div className="form">
                    <Form.Item label="E MAIL"/>
                    <Input placeholder="E mail" className="inputbar"/>
                    </div>
                    <div className="form">
                    <Form.Item label="PHONE NUMBER"/>
                    <Input placeholder="Phone number" className="inputbar"/>
                    </div>
                </div>
                <div className="formbox">
                    <div className="form">
                    <Form.Item label="COMPANY"/>
                    <Input placeholder="Company" className="inputbar"/>
                    </div>
                    <div className="form">
                    <Form.Item label="WEBSITE"/>
                    <Input placeholder="Website" className="inputbar"/>
                    </div>
                </div>
            </Form>
            <Button onClick={() => this.changeTab("2")} className="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><InfoCircleFilled className="iconsize"/></span>} key="2">
          <div className="formcondent">
          <h1>Add Lead Info</h1>
            <Form  className="inputform1">
                <div>
                    <Form.Item label="ASSIGNED TO" className="formlabel"/>
                    <Select className="inputbar">
                        <Select.Option value="choose">Choose</Select.Option>
                    </Select>
                </div>
                <div>
                    <Form.Item label="ASSIGNED TO" className="formlabel"/>
                    <Select className="inputbar">
                        <Select.Option value="choose">Choose</Select.Option>
                    </Select>
                </div>
                <div>
                <Form.Item label="CREATED ON" className="formlabel"/>
                <DatePicker className="inputbar"/>
                </div>
            </Form>
            <Button onClick={() => this.changeTab("3")} className="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><EnvironmentFilled className="iconsize"/></span>} key="3">
          <div className="formcondent">
          <h1>Add Address</h1>
            <Form  layout="inline" className="inputform1">
                <div className="formbox">
                    <div className="form">
                    <Form.Item label="STREET"/>
                    <Input placeholder="Street" className="inputbar"/>
                    </div>
                    <div className="form">
                    <Form.Item label="CITY"/>
                    <Input placeholder="City" className="inputbar"/>
                    </div>
                </div>
                <div className="formbox">
                    <div className="form">
                    <Form.Item label="EMIRATE"/>
                    <Input placeholder="Emirate" className="inputbar"/>
                    </div>
                    <div className="form">
                    <Form.Item label="ZIPCODE"/>
                    <Input placeholder="Zipcode" className="inputbar"/>
                    </div>
                </div>
            </Form>
            <Button onClick={() => this.changeTab("4")} className="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><BulbFilled className="iconsize"/></span>} key="4">
          <div className="formcondent">
          <h1>Add Product</h1>
            <Form  layout="inline" className="inputform1">
            <Select mode="tags" style={{ width: '24vw',marginTop:'16vh' }} placeholder="Tags Mode">
            <Option value="product1">Product1</Option>
            <Option value="Product2">Product2</Option>
            <Option value="Product3">Product3</Option>
            </Select>
            </Form>
            <Button onClick={() => this.changeTab("5")} className="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><PushpinFilled className="iconsize"/></span>} key="5">
          <div className="formcondent">
          <h1>Add Remark</h1>
          <Form  className="inputform1">
                <Input.TextArea className="inputbar1"autoSize={{ minRows: 7, maxRows: 15 }}placeholder="Place to write any remarks regarding leads..."/>
            </Form>
            <Button onClick={() => this.changeTab("6")} className="nextbutton">Next</Button>
          </div>
          </TabPane>
          <TabPane tab={<span><CustomerServiceFilled className="iconsize"/></span>} key="6">
          <div className="formcondent">
          <h1>Add Salesperson</h1>
            <Form  className="inputform1">
                <div>
                    <Form.Item label="ASSIGNED TO" className="formlabel"/>
                    <Select className="inputbar">
                        <Select.Option value="choose">Choose</Select.Option>
                    </Select>
                </div>
            </Form>
            <Button onClick={this.onNextClick} className="nextbutton">Save</Button>
            </div>
          </TabPane>
        </Tabs>
        </Drawer>
      </div>
    );
  }
};
export default SideMenu