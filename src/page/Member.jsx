import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Member.css';

export const Member = () => {
  const [members, setMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [reason, setReason] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    axios.get('http://localhost/api/admin')
      .then(response => {
         console.log(response.data);
        setMembers(response.data);
      })
      .catch(error => {
        console.error('멤버 정보 불러오기 실패:', error);
      });
  }, []);

  const openModal = (member) => {
    console.log('openModal called', member);
    setSelectedMember(member);
    setReason('');
    setReleaseDate('');
    setIsModalOpen(true);
  };

  const handleSubmitBan = () => {
    if (!reason || !releaseDate) {
      alert('사유와 해제 날짜는 필수입니다.');
      return;
    }
    

    axios.post('http://localhost/api/admin/block', {
      memberId: selectedMember.id,
      reason: reason,
      endDate: new Date(releaseDate)
    }).then(() => {
      alert(`${selectedMember.loginId} 님을 블랙리스트에 추가했습니다.`);
      setIsModalOpen(false);
      
      setMembers(prev => 
        prev.filter(m => m.id !== selectedMember.id)
      );
    }).catch((err) => {
      console.error(err);
      alert('블랙리스트 등록 실패');
    });
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="container">
      <div className="listBox">
        <div className="idList">회원 아이디</div>
        <div className="nickList">닉네임</div>
        <div className="addressList">주소</div>
        <div className="dateList">가입날짜</div>
      </div>

      {members.map((member) => (
        <div className="keyName" key={member.loginId}>
          <div className="loginId">
            {member.loginId}
            <button id="banBtn" onClick={() => openModal(member)}>BAN</button>
          </div>
          <div className="nickname">{member.nickname}</div>
          <div className="address">{member.address}</div>
          <div className="regDate">{member.regDate}</div>
        </div>
      ))}

      {isModalOpen && (
        <div className="customModal" onClick={handleModalClick}>
          <div className="customModalContent" onClick={(e) => e.stopPropagation()}>
            <h3>블랙리스트 등록</h3>
            <p><strong>대상:</strong> {selectedMember?.loginId}</p>
            <input
              type="text"
              placeholder="사유 입력"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <input
              type="date"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            />
            <div className="modalButton">
              <button onClick={handleSubmitBan}>등록</button>
              <button onClick={() => setIsModalOpen(false)}>취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
