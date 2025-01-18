import React from 'react';

const Footer = () => {
    const profiles = [
        { 
            name: 'LeetCode', 
            url: 'https://leetcode.com/u/rcharantej928/', 
            icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png' // LeetCode logo URL
        },
        { 
            name: 'CodeChef', 
            url: 'https://www.codechef.com/users/charantej928', 
            icon: 'https://img.icons8.com/ios/50/codechef.png' // CodeChef logo URL
        },
        { 
            name: 'Codeforces', 
            url: 'https://codeforces.com/profile/RCTR', 
            icon: 'https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png' // Codeforces logo URL
        },
    ];

    return (
        <footer className="footer">
            <div className="coding-profiles">
                <ul>
                    {profiles.map((profile, index) => (
                        <li key={index}>
                            <a href={profile.url} target="_blank" rel="noopener noreferrer">
                                <img src={profile.icon} alt={`${profile.name} logo`} className="profile-icon" />
                                {profile.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
