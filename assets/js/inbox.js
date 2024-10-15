function loadConversation(ticketId) {
    document.querySelectorAll('.ticket-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelector(`[onclick="loadConversation('${ticketId}')"]`).classList.add('active');

    document.querySelectorAll('.conversation').forEach(convo => {
        convo.classList.add('hidden');
    });

    document.getElementById(`${ticketId}-conversation`).classList.remove('hidden');

    if (ticketId === 'ticket1') {
        document.getElementById('message-header').innerHTML = `
            <h3>Prof. Carlos Dominguez</h3>
            <p>Ticket# 2024-09/24</p>
        `;
    } else if (ticketId === 'ticket2') {
        document.getElementById('message-header').innerHTML = `
            <h3>Prof. Sammie Maglambayan</h3>
            <p>Ticket# 2024-09/28</p>
        `;
    } else if (ticketId === 'ticket3') {
        document.getElementById('message-header').innerHTML = `
            <h3>Prof. Maria Delos Reyes</h3>
            <p>Ticket# 2024-09/30</p>
        `;
    }
}
