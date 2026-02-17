
        
        // Notifications Data
        const notificationsData = [
            {
                id: 1,
                type: 'deadline',
                title: 'Deadline Approaching',
                message: 'Chevening Scholarship deadline is in 7 days. Complete your application now!',
                time: '2 hours ago',
                unread: true,
                icon: '📅'
            },
            {
                id: 2,
                type: 'match',
                title: 'New Scholarship Match',
                message: 'We found 3 new scholarships that match your profile perfectly (85%+ match).',
                time: '5 hours ago',
                unread: true,
                icon: '🎯'
            },
            {
                id: 3,
                type: 'verified',
                title: 'Document Verified',
                message: "Your Bachelor's transcript has been verified successfully.",
                time: '1 day ago',
                unread: false,
                icon: '✓'
            },
            {
                id: 4,
                type: 'submitted',
                title: 'Application Submitted',
                message: 'Your Fulbright Program application has been submitted successfully!',
                time: '2 days ago',
                unread: false,
                icon: '✓'
            },
            {
                id: 5,
                type: 'reminder',
                title: 'Recommendation Letter Reminder',
                message: "Don't forget to request your recommendation letters for DAAD Scholarship.",
                time: '3 days ago',
                unread: false,
                icon: '📅'
            }
        ];

        // Initialize notifications
        function initNotifications() {
            displayNotifications();
            updateNewCount();
        }

        // Display Notifications
        function displayNotifications() {
            const list = document.getElementById('notifications-list');
            
            if (notificationsData.length === 0) {
                list.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📭</div>
                        <h3>No notifications yet</h3>
                        <p>When you receive notifications, they'll appear here</p>
                    </div>
                `;
                return;
            }
            
            list.innerHTML = notificationsData.map(notification => `
                <div class="notification-item ${notification.unread ? 'unread' : ''} ${notification.type}" 
                     data-id="${notification.id}"
                     onclick="markAsRead(${notification.id})">
                    <div class="notification-icon-wrapper ${notification.type}">
                        ${notification.icon}
                    </div>
                    <div class="notification-content">
                        <div class="notification-header">
                            <h3 class="notification-title">${notification.title}</h3>
                            <div class="notification-actions">
                                ${notification.unread ? '<span class="unread-dot"></span>' : ''}
                                <button class="delete-btn" onclick="event.stopPropagation(); deleteNotification(${notification.id})" title="Delete">🗑️</button>
                            </div>
                        </div>
                        <p class="notification-message">${notification.message}</p>
                        <span class="notification-time">${notification.time}</span>
                    </div>
                </div>
            `).join('');
        }

        // Update new notifications count
        function updateNewCount() {
            const newCount = notificationsData.filter(n => n.unread).length;
            const badge = document.getElementById('new-count');
            const navBadge = document.querySelector('.notification-badge');
            
            if (newCount > 0) {
                badge.textContent = `${newCount} new`;
                badge.style.display = 'inline-block';
                navBadge.textContent = newCount;
                navBadge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
                navBadge.style.display = 'none';
            }
        }

        // Mark notification as read
        function markAsRead(id) {
            const notification = notificationsData.find(n => n.id === id);
            if (notification && notification.unread) {
                notification.unread = false;
                displayNotifications();
                updateNewCount();
            }
        }

        // Mark all as read
        function markAllRead() {
            notificationsData.forEach(n => n.unread = false);
            displayNotifications();
            updateNewCount();
        }

        // Delete notification
        function deleteNotification(id) {
            const index = notificationsData.findIndex(n => n.id === id);
            if (index > -1) {
                notificationsData.splice(index, 1);
                displayNotifications();
                updateNewCount();
            }
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

        // Initialize on page load
        initNotifications();
    