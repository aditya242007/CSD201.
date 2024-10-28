document.addEventListener('DOMContentLoaded', () => {
 
    lucide.createIcons();

  
    const navButtons = document.querySelectorAll('.nav-button, .cta-button');
    const sections = document.querySelectorAll('main > section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            sections.forEach(section => {
                if (section.id === tabName) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });

            navButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.nav-button[data-tab="${tabName}"]`).classList.add('active');
        });
    });

   
    const symptomsTextarea = document.getElementById('symptoms');
    const getAssessmentButton = document.getElementById('get-assessment');
    const aiDiagnosis = document.getElementById('ai-diagnosis');
    const diagnosisText = document.getElementById('diagnosis-text');

    getAssessmentButton.addEventListener('click', () => {
        const symptoms = symptomsTextarea.value;
        if (symptoms) {
            
            setTimeout(() => {
                diagnosisText.textContent = `Based on your symptoms "${symptoms}", you may have a common cold. However, please consult with a doctor for a proper diagnosis.`;
                aiDiagnosis.classList.remove('hidden');
            }, 1000);
        }
    });

   
    const calendar = document.getElementById('calendar');
    const timeSlots = document.getElementById('time-slots');

    function renderCalendar(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

        let calendarHTML = `
            <div class="calendar-header">
                <button id="prev-month">&lt;</button>
                <h3>${monthNames[date.getMonth()]} ${date.getFullYear()}</h3>
                
                <button id="next-month">&gt;</button>
            </div>
            <div class="calendar-body">
                <div class="weekdays">
                    <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div class="days">
        `;

        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<div></div>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            calendarHTML += `<div class="calendar-day" data-date="${date.getFullYear()}-${date.getMonth() + 1}-${day}">${day}</div>`;
        }

        calendarHTML += `
                </div>
            </div>
        `;

        calendar.innerHTML = calendarHTML;

        
        document.getElementById('prev-month').addEventListener('click', () => {
            renderCalendar(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        });
        document.getElementById('next-month').addEventListener('click', () => {
            renderCalendar(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        });

        
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.addEventListener('click', (e) => {
                document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                e.target.classList.add('selected');
                renderTimeSlots(e.target.dataset.date);
            });
        });
    }

    function renderTimeSlots(date) {
        const slots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
        const availableSlots = slots.filter(() => Math.random() > 0.3);

        timeSlots.innerHTML = availableSlots.map(slot => `
            <div class="time-slot">${slot}</div>
        `).join('');
    }

    renderCalendar(new Date());

   
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});