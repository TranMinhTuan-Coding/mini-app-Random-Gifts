import {useState} from 'react';

const giftsMainData=[
    'APPLE MacBook M1',
    'LG Gram 2021',
    'ASUS Zenbook 13 UX325 OLED',
    'ACER Swift 5 SF514-55T',
    'HUAWEI Matebook D 14',
    'HP Envy 14',
    'DELL XPS 13 9310 2 in 1',
    'LENOVO Yoga 7',
    'AVITA Liber',
    'MSI Prestige 14 Evo',
]

function MainApp() {

    const [giftsData, setGiftsData]=useState()

    // Math.Random() => nhảy số ngẫy nhiên từ 0 -> nhỏ hơn 1
    // Math.Floor() => cắt phần thập phân, lấy phần nguyên
    
    // Mỗi lần setState => state nhận giá trị mới thay vì initial => đưa vào hàm đợi => render lại => chạy lại

    const buttonFunc = () => {
        const giftNumber=Math.floor(Math.random() * giftsMainData.length)

        setGiftsData(giftsMainData[giftNumber])
    }

    return(
        <div className='main-box'>
            <div className='main-app'>
                <div className='gift-box'>
                    <p>Here's Your Gift! </p>
                    <p>{giftsData || "None of gifts yet (Press Button!)"}</p>

                    <button 
                        onClick={buttonFunc}
                    >
                        GIFT!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainApp;