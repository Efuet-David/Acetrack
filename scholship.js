
   
        // Scholarship Data
        const scholarshipsData = [
            {
                id: 1,
                country: "GB",
                countryFlag: "🇬🇧",
                title: "Chevening Scholarship",
                organization: "UK Government",
                badges: ["Fully Funded", "Verified", "82% Match"],
                location: "United Kingdom",
                deadline: "Mar 15, 2026",
                level: ["Master's"],
                duration: "1 year",
                description: "The Chevening Scholarship is the UK government's international awards program aimed at developing global leaders. It offers full financial support for a one-year master's degree in any subject at any UK university.",
                requirements: [
                    "Hold an undergraduate degree",
                    "Have at least 2 years of work experience",
                    "Meet the Chevening English language requirement",
                    "Return to your country of citizenship for at least 2 years",
                    "Apply to three different eligible UK university courses"
                ],
                benefits: [
                    "Full tuition fees covered",
                    "Monthly living allowance",
                    "Return airfare to the UK",
                    "Arrival and departure allowances",
                    "Visa application fee coverage"
                ]
            },
            {
                id: 2,
                country: "US",
                countryFlag: "🇺🇸",
                title: "Fulbright Program",
                organization: "US Department of State",
                badges: ["Fully Funded", "Verified", "88% Match"],
                location: "United States",
                deadline: "Apr 1, 2026",
                level: ["Master's", "PhD"],
                duration: "1-2 years",
                description: "The Fulbright Program offers scholarships for international students to study, conduct research, and teach in the United States. It promotes mutual understanding between nations through educational and cultural exchange.",
                requirements: [
                    "Hold a bachelor's degree or equivalent",
                    "Demonstrate leadership potential",
                    "Have sufficient proficiency in English",
                    "Be in good health",
                    "Commit to returning to home country after program"
                ],
                benefits: [
                    "Full tuition and fees",
                    "Living stipend",
                    "Round-trip airfare",
                    "Health insurance",
                    "Enrichment activities and cultural events"
                ]
            },
            {
                id: 3,
                country: "DE",
                countryFlag: "🇩🇪",
                title: "DAAD Scholarship",
                organization: "German Academic Exchange Service",
                badges: ["Fully Funded", "Verified", "85% Match"],
                location: "Germany",
                deadline: "Mar 30, 2026",
                level: ["Master's", "PhD"],
                duration: "1-2 years",
                description: "DAAD offers a wide range of funding opportunities for international students and researchers. The scholarship supports postgraduate studies and research in Germany with a focus on academic excellence.",
                requirements: [
                    "Completed undergraduate degree",
                    "Academic excellence with above-average results",
                    "Not have lived in Germany for more than 15 months",
                    "German or English language proficiency",
                    "Clear study/research proposal"
                ],
                benefits: [
                    "Monthly scholarship payment",
                    "Health insurance subsidy",
                    "Travel allowance",
                    "Study and research allowance",
                    "German language course support"
                ]
            },
            {
                id: 4,
                country: "GB",
                countryFlag: "🇬🇧",
                title: "Commonwealth Scholarship",
                organization: "UK Commonwealth",
                badges: ["Fully Funded", "Verified", "90% Match"],
                location: "United Kingdom",
                deadline: "Apr 15, 2026",
                level: ["Master's", "PhD"],
                duration: "1-3 years",
                description: "Commonwealth Scholarships are for talented and motivated individuals with the potential to make a positive impact on the global stage. The program focuses on students from low and middle-income Commonwealth countries.",
                requirements: [
                    "Be a citizen of a Commonwealth country",
                    "Hold a first degree of at least upper second class",
                    "Be unable to afford to study in the UK without a scholarship",
                    "Have provided all supporting documentation",
                    "Meet UK university entry requirements"
                ],
                benefits: [
                    "Full tuition fees",
                    "Living expenses allowance",
                    "Return airfare",
                    "Thesis grant (if applicable)",
                    "Warm clothing allowance"
                ]
            },
            {
                id: 5,
                country: "CA",
                countryFlag: "🇨🇦",
                title: "Vanier Canada Graduate Scholarship",
                organization: "Government of Canada",
                badges: ["Fully Funded", "Verified", "87% Match"],
                location: "Canada",
                deadline: "May 1, 2026",
                level: ["PhD"],
                duration: "3 years",
                description: "The Vanier Canada Graduate Scholarships program aims to attract and retain world-class doctoral students and to establish Canada as a global centre of excellence in research and higher learning.",
                requirements: [
                    "Be nominated by only one Canadian institution",
                    "Demonstrate academic excellence",
                    "Show research potential",
                    "Display leadership abilities",
                    "Be pursuing doctoral studies"
                ],
                benefits: [
                    "$50,000 per year for 3 years",
                    "Health insurance coverage",
                    "Research support funding",
                    "Conference travel allowances",
                    "Access to research facilities"
                ]
            },
            {
                id: 6,
                country: "EU",
                countryFlag: "🇪🇺",
                title: "Erasmus Mundus Joint Masters",
                organization: "European Commission",
                badges: ["Fully Funded", "Verified", "87% Match"],
                location: "Europe (Multiple)",
                deadline: "Feb 28, 2026",
                level: ["Master's"],
                duration: "1-2 years",
                description: "Erasmus Mundus Joint Master Degrees are international study programs jointly delivered by consortia of higher education institutions. Students study in at least two different countries and receive a joint or double degree.",
                requirements: [
                    "Hold a bachelor's degree",
                    "Meet specific program requirements",
                    "English language proficiency",
                    "Strong academic record",
                    "Motivation to study in multiple countries"
                ],
                benefits: [
                    "Full tuition coverage",
                    "Monthly living allowance (€1,400)",
                    "Travel costs",
                    "Installation costs",
                    "Health insurance"
                ]
            },
            {
                id: 7,
                country: "AU",
                countryFlag: "🇦🇺",
                title: "Australian Awards Scholarship",
                organization: "Australian Government",
                badges: ["Fully Funded", "Verified", "84% Match"],
                location: "Australia",
                deadline: "Jun 15, 2026",
                level: ["Master's", "PhD"],
                duration: "2-4 years",
                description: "Australian Awards Scholarships provide opportunities for people from developing countries to undertake full-time undergraduate or postgraduate study at participating Australian universities and Technical and Further Education institutions.",
                requirements: [
                    "Be a citizen of an eligible country",
                    "Not hold Australian or New Zealand citizenship",
                    "Meet English language requirements",
                    "Have work experience in relevant field",
                    "Satisfy Australian university admission requirements"
                ],
                benefits: [
                    "Full tuition fees",
                    "Return air travel",
                    "Living allowance",
                    "Health coverage",
                    "Pre-course English training if required"
                ]
            },
            {
                id: 8,
                country: "🌐",
                countryFlag: "🌐",
                title: "Mastercard Foundation Scholars",
                organization: "Various Universities",
                badges: ["Fully Funded", "Verified", "95% Match"],
                location: "Multiple Countries",
                deadline: "Mar 28, 2026",
                level: ["Master's"],
                duration: "2 years",
                description: "The Mastercard Foundation Scholars Program provides academically talented yet economically disadvantaged young people with the opportunity to complete their education and become leaders in social and economic transformation.",
                requirements: [
                    "Demonstrate financial need",
                    "Show academic talent",
                    "Exhibit leadership potential",
                    "Commitment to giving back to community",
                    "Be from Sub-Saharan Africa"
                ],
                benefits: [
                    "Full tuition and fees",
                    "Accommodation costs",
                    "Living expenses",
                    "Travel costs",
                    "Leadership development programs"
                ]
            }
        ];

        let filteredScholarships = [...scholarshipsData];

        // Initialize
        function init() {
            displayScholarships(filteredScholarships);
        }

        // Display Scholarships
        function displayScholarships(scholarships) {
            const grid = document.getElementById('scholarships-grid');
            const count = document.getElementById('count');
            
            count.textContent = scholarships.length;
            
            grid.innerHTML = scholarships.map(s => `
                <div class="scholarship-card" onclick="openModal(${s.id})">
                    <div class="card-header">
                        <div class="card-title-section">
                            <div class="card-country">${s.countryFlag} ${s.country}</div>
                            <h3 class="card-title">${s.title}</h3>
                            <p class="card-organization">${s.organization}</p>
                        </div>
                        <div class="bookmark-icon" onclick="event.stopPropagation(); toggleBookmark(this)">
                            📑
                        </div>
                    </div>
                    
                    <div class="card-badges">
                        ${s.badges.map((badge, i) => `
                            <span class="badge badge-${i === 0 ? 'funded' : i === 1 ? 'verified' : 'match'}">
                                ${badge}
                            </span>
                        `).join('')}
                    </div>
                    
                    <div class="card-info">
                        <div class="info-item">
                            <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            ${s.location}
                        </div>
                        <div class="info-item">
                            <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Deadline: ${s.deadline}
                        </div>
                    </div>
                    
                    <div class="card-footer">
                        ${s.level.map(l => `<span class="level-tag">${l}</span>`).join('')}
                    </div>
                    
                    <button class="view-details-btn">View Details</button>
                </div>
            `).join('');
        }

        // Search Function
        function performSearch() {
            const searchTerm = document.getElementById('main-search').value.toLowerCase();
            
            filteredScholarships = scholarshipsData.filter(s => 
                s.title.toLowerCase().includes(searchTerm) ||
                s.organization.toLowerCase().includes(searchTerm) ||
                s.location.toLowerCase().includes(searchTerm) ||
                s.description.toLowerCase().includes(searchTerm)
            );
            
            displayScholarships(filteredScholarships);
        }

        // Filter by Country
        function filterByCountry(country) {
            const tags = document.querySelectorAll('.country-tag');
            tags.forEach(tag => tag.classList.remove('active'));
            event.target.classList.add('active');
            
            if (country === 'all') {
                filteredScholarships = scholarshipsData;
            } else {
                filteredScholarships = scholarshipsData.filter(s => 
                    s.country === country || s.location.includes(country)
                );
            }
            
            displayScholarships(filteredScholarships);
        }

        // Open Modal
        function openModal(id) {
            const scholarship = scholarshipsData.find(s => s.id === id);
            if (!scholarship) return;
            
            document.getElementById('modal-title').textContent = scholarship.title;
            document.getElementById('modal-org').textContent = scholarship.organization;
            document.getElementById('modal-badges').innerHTML = scholarship.badges.map((badge, i) => `
                <span class="badge badge-${i === 0 ? 'funded' : i === 1 ? 'verified' : 'match'}">
                    ${badge}
                </span>
            `).join('');
            
            document.getElementById('modal-description').textContent = scholarship.description;
            document.getElementById('modal-country').textContent = scholarship.location;
            document.getElementById('modal-deadline').textContent = scholarship.deadline;
            document.getElementById('modal-level').textContent = scholarship.level.join(', ');
            document.getElementById('modal-duration').textContent = scholarship.duration;
            
            document.getElementById('modal-requirements').innerHTML = scholarship.requirements.map(r => 
                `<li>${r}</li>`
            ).join('');
            
            document.getElementById('modal-benefits').innerHTML = scholarship.benefits.map(b => 
                `<li>${b}</li>`
            ).join('');
            
            document.getElementById('modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close Modal
        function closeModal() {
            document.getElementById('modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Toggle Bookmark
        function toggleBookmark(element) {
            element.classList.toggle('active');
        }

        // Apply Now
        function applyNow() {
            alert('Application process initiated! In a real application, you would be redirected to the scholarship application portal.');
        }

        // Toggle Filters (Mobile)
        function toggleFilters() {
            document.getElementById('sidebar').classList.toggle('active');
        }

        // Hamburger Menu
        document.querySelector('.hamburger').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const nav = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            if (!nav.contains(e.target) && !hamburger.contains(e.target) && !e.target.closest('.nav-container')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Close modal on outside click
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Enter key search
        document.getElementById('main-search').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Initialize
        init();
    