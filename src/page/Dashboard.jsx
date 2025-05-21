import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TopKeywordsDoughnut } from '../component/charts/TopKeywordsDoughnut';
import { TopRegionsLine } from '../component/charts/TopRegionsLine';

// import { GenderBarChart } from '../component/charts/GenderBarChart';

export const Dashboard = () => {
    const [keywords, setKeywords] = useState([]);
    // console.log('keywords:', keywords); 

    useEffect(() => {
    axios.get('http://localhost/api/dashboard/top-addresses')
        .then(response => {
            //  console.log('API data:', response.data);  // 데이터 확인용
            // console.log('API 응답 데이터:', response.data);
            // 예: [{address: "동작구", count: 120}, ...]
            const formatted = response.data.map(item => ({
                keyword: item.address,
                count: item.count,
            }));
            // console.log('포맷된 keywords:', formatted);
            setKeywords(formatted);
        })
        .catch(error => {
            console.error('대시보드 주소 데이터 불러오기 실패', error);
        });
}, []);

    return (
        <div className="container" style={{ height: '100%', width: '100%', padding: '0px' }}>
            <div className="chart-box" style={{display: 'flex', justifyContent: 'space-between', gap: '20px', height: '400px' }}>
                <div className="chart-content1" style={{ flex: 1, minWidth: '300px', height: '100%' }}>
                    <TopKeywordsDoughnut keywords={keywords} />
                </div>
                <div className="chart-content2" style={{ flex: 1, minWidth: '300px', height: '100%' }}>
                    <div style={{ height: '100%' }}>
                        <TopRegionsLine />
                    </div>
                </div>
                
            </div>
        </div>
    )
}