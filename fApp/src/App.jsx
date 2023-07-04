import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const App = () => (
  <Card
    style={{
      width: 230,
      height:200,
      margin:50,
      border:'1px solid  #0a6e6e',
      
    }}
    cover={
    <div 
    style={{
      backgroundColor:' #0a6e6e', 
      color:'#fff',
      fontSize:'17px',
      fontWeight:600,
      height:40, 
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:'16px'
    }}> <h3> 7 </h3> </div>
    
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Admin Dashbord"
      // description="This is the description"
    />
  </Card>
);
export default App;