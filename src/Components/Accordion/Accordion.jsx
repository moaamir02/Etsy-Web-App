import React, { useState } from 'react'
import '../Accordion/Accordion.css'


const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) =>{
        if (selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='wrapper'>
            <div className='accordion pb-10'>
                {data.map((item, i)=> (<div className='item' >
                    <div className='title' onClick={()=> toggle(i)}>
                        <h2 className='py-2'>{item.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'content-show' : 'content'}>{item.answer}</div>
                </div>))}
            </div>
        </div>
    )
}

const data = [
    {
        question: "Why choose Etsy?",
        answer: `A community doing good
        Etsy is where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together:
        
        Your purchases on Etsy in 2021 generated nearly $4 billion in income for small businesses.
        
        We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.
        
        We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.
        
        Support independent creators
        There’s no Etsy warehouse—just millions of people selling the things they love. We make the whole process easy, helping you connect directly with talented artisans from across the world (including India) to find something extraordinary.
        
        Peace of mind
        With Etsy Purchase Protection, you can shop confidently, knowing if something goes wrong with your order, we’ve got your back for all eligible purchases. If you ever need assistance, we are always ready to step in for support.`
    },
    {
        question: 'What can you shop on Etsy?',
        answer: `The imagination of Etsy sellers can run far and wide, which makes our platform a home to more than 100 million active listings across home, style, and gifts. Some of our popular categories include:

        Home & Living: Whether you’re setting up a new apartment or making small upgrades for a home refresh, you’ll find everything you need to make your home a reflection of your personality on Etsy. From traditional elements like Jaipuri bedding, masala boxes, and Madhubani paintings to modern essentials like sleek table lamps, vibrant indoor planters, and decorative platters, Etsy sellers have much to offer.
        
        Clothing: Your unique fashion style deserves outfits that can match it. Discover tie-dye kaftans, linen shirts, hand-painted sarees, chikankari kurtis, ajrakh scarves and so much more—from small sellers who understand your aesthetic just as much as your comfort.
        
        Accessories: The gajra for your friend’s haldi ceremony or the gemstone ring that represents your zodiac—sometimes, the little things can make the biggest impact. Etsy has it all and more! Explore a range of beautiful fashion accessories and jewellery for all the occasions you have planned.
        
        Gifts: From birthdays and anniversaries to festivals and weddings, we’ve got all the special moments in life covered. You’ll easily find the perfect presents that not only match the unique personalities of your loved ones perfectly but also make them feel seen and cherished.`
    },
    {
        question: 'How to buy on Etsy?',
        answer: `If you’re looking for something specific, start by putting in the keywords in our search and then using filters to narrow down the results. You can even message the sellers with any questions or requests you may have before placing an order with them.

        If you’re looking for inspiration, head on over to our Editor’s Picks or look out for the latest updates on our Journal to discover extraordinary items.`
    },
    {
        question: 'How to sell on Etsy?',
        answer: `You can sell handmade goods, vintage items, and craft supplies on Etsy. With low fees, powerful tools, and support and education, we help creative entrepreneurs start, manage, and scale their businesses. Want to open a shop? All it takes is Rs. 16* to start selling on Etsy.

    *Listing fees are billed for 0.20 USD, so if your bank's currency is not USD, the amount in your currency may vary based on changes in the exchange rate.`}
]

export default Accordion