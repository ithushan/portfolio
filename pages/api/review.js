const review = [
    {
        id: 0,
        clientName: 'Mr.S.vijeev',
        clientLocation: 'Senior Lecturer - ATI Jaffna',
        clientSource: '',
        clientReview: '',
        number: '+94 077 698 5322',
        email: 'vijeev@sliate.ac.lk'
    },
    {
        id: 2,
        clientName: 'Mr.N.kajan',
        clientLocation: 'Lecturer - ATI Jaffna',
        clientSource: '',
        clientReview: '',
        number: '+94 077 698 5322',
        email: 'vijeev@sliate.ac.lk'
    },
    {
        id: 3,
        clientName: 'Thivakar Nomaldhas ',
        clientLocation: 'CEO & Founder - Accron Revolutions Private Limited.',
        clientSource: '',
        clientReview: "",
        number: '+94 077 698 5322',
        email: 'vijeev@sliate.ac.lk'
    },
    {
        id: 4,
        clientName: 'Sangaranathan Sangarlal ',
        clientLocation: 'Associate Technial Leader – Unicom SD',
        clientSource: '',
        clientReview: '',
        number: '+94 077 698 5322',
        email: 'vijeev@sliate.ac.lk'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
