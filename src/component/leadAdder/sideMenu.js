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
        <TabPane  tab={<span><ContactsFilled class="iconsize"/></span>} key="1">
                {/* lead adding input */}
            <div class="formcondent">
                <h1>Add Customer Info</h1>
            <Form  layout="inline" class="inputform1">
                <div class="formbox">
                    <div class="form">
                    <Form.Item label="FIRST NAME"/>
                    <Input placeholder="First name" class="inputbar"/>
                    </div>
                    <div class="form">
                    <Form.Item label="LAST NAME"/>
                    <Input placeholder="Last name" class="inputbar"/>
                    </div>
                </div>
                <div class="formbox">
                    <div class="form">
                    <Form.Item label="E MAIL"/>
                    <Input placeholder="E mail" class="inputbar"/>
                    </div>
                    <div class="form">
                    <Form.Item label="PHONE NUMBER"/>
                    <Input placeholder="Phone number" class="inputbar"/>
                    </div>
                </div>
                <div class="formbox">
                    <div class="form">
                    <Form.Item label="COMPANY"/>
                    <Input placeholder="Company" class="inputbar"/>
                    </div>
                    <div class="form">
                    <Form.Item label="WEBSITE"/>
                    <Input placeholder="Website" class="inputbar"/>
                    </div>
                </div>
            </Form>
            <Button onClick={() => this.changeTab("2")} class="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><InfoCircleFilled class="iconsize"/></span>} key="2">
          <div class="formcondent">
          <h1>Add Lead Info</h1>
            <Form  class="inputform1">
                <div>
                    <Form.Item label="ASSIGNED TO" class="formlabel"/>
                    <Select class="inputbar">
                        <Select.Option value="choose">Choose</Select.Option>
                    </Select>
                </div>
                <div>
                    <Form.Item label="ASSIGNED TO" class="formlabel"/>
                    <Select class="inputbar">
                        <Select.Option value="choose">Choose</Select.Option>
                    </Select>
                </div>
                <div>
                <Form.Item label="CREATED ON" class="formlabel"/>
                <DatePicker class="inputbar"/>
                </div>
            </Form>
            <Button onClick={() => this.changeTab("3")} class="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><EnvironmentFilled class="iconsize"/></span>} key="3">
          <div class="formcondent">
          <h1>Add Address</h1>
            <Form  layout="inline" class="inputform1">
                <div class="formbox">
                    <div class="form">
                    <Form.Item label="STREET"/>
                    <Input placeholder="Street" class="inputbar"/>
                    </div>
                    <div class="form">
                    <Form.Item label="CITY"/>
                    <Input placeholder="City" class="inputbar"/>
                    </div>
                </div>
                <div class="formbox">
                    <div class="form">
                    <Form.Item label="EMIRATE"/>
                    <Input placeholder="Emirate" class="inputbar"/>
                    </div>
                    <div class="form">
                    <Form.Item label="ZIPCODE"/>
                    <Input placeholder="Zipcode" class="inputbar"/>
                    </div>
                </div>
            </Form>
            <Button onClick={() => this.changeTab("4")} class="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><BulbFilled class="iconsize"/></span>} key="4">
          <div class="formcondent">
          <h1>Add Product</h1>
            <Form  layout="inline" class="inputform1">
            <Select mode="tags" style={{ width: '24vw',marginTop:'16vh' }} placeholder="Tags Mode">
            <Option value="product1">Product1</Option>
            <Option value="Product2">Product2</Option>
            <Option value="Product3">Product3</Option>
            </Select>
            </Form>
            <Button onClick={() => this.changeTab("5")} class="nextbutton">Next</Button>
            </div>
          </TabPane>
          <TabPane tab={<span><PushpinFilled class="iconsize"/></span>} key="5">
          <div class="formcondent">
          <h1>Add Remark</h1>
          <Form  class="inputform1">
                <Input.TextArea class="inputbar1"autoSize={{ minRows: 7, maxRows: 15 }}placeholder="Place to write any remarks regarding leads..."/>
            </Form>
            <Button onClick={() => this.changeTab("6")} class="nextbutton">Next</Button>
          </div>
          </TabPane>
          <TabPane tab={<span><CustomerServiceFilled class="iconsize"/></span>} key="6">
          <div class="formcondent">
          <h1>Add Salesperson</h1>
            <Form  class="inputform1">
                <div>
                    <Form.Item label="ASSIGNED TO" class="formlabel"/>
                    <Select class="inputbar">
                        <Select.Option value="choose">Choose</Select.Option>
                    </Select>
                </div>
            </Form>
            <Button onClick={this.onNextClick} class="nextbutton">Save</Button>
            </div>
          </TabPane>
        </Tabs>
        </Drawer>
      </div>
    );
  }
};
export default SideMenu