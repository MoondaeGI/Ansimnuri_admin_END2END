import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Black.css'; //

export const BlackList = () => {
  const [blackList, setBlackList] = useState([]);

  useEffect(() => {
    fetchBlackList();
  }, []);

  const fetchBlackList = () => {
    axios.get('http://localhost/api/admin/block') // 실제로 GET 요청을 보내야 합니다
      .then(response => {
        console.log(response.data); console.log(response.data);
        setBlackList(response.data); // 응답 데이터 저장
      })
      .catch(error => {
        console.error('블랙리스트 불러오기 실패:', error);
      });
  };
 const handleUnblock = (blockId) => {
    axios.delete(`http://localhost/api/admin/block/${blockId}`)
      .then(() => {
        alert('해제되었습니다.');
        setBlackList(prev => prev.filter(item => item.id !== blockId));
      })
      .catch((error) => {
        console.error('해제 실패:', error);
        alert('해제 실패');
      });
  };
  

  return (
    <div className="container">
      <div className="listBox">
        <div className="memberId">회원 아이디</div>
        <div className="regDate">블랙리스트 등록일</div>
        <div className="endDate">블랙리스트 해제일</div>
        <div className="reason">사유</div>
      </div>

      {blackList.map((item) => (
        <div className="keyName" key={item.id}>
          <div className="memberId">{item.login_Id}
          <button className="unblockBtn" onClick={() => handleUnblock(item.id)}>해제</button>
          </div>
          <div className="regDate">{item.regDate}</div>
          <div className="endDate">{item.endDate}</div>
          <div className="reason">{item.reason}</div>
        </div>
      ))}
    </div>
  );
};
