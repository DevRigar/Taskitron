const express = require ('express')
const router = express.Router()
const { getTasks,
        setTask,
        updateTask,
        deleteTask 
        } = require('../controllers/taskController')


router.route('/').get(getTasks).post(setTask)

router.route('/:id').put(updateTask).delete(deleteTask)



// Ξεχωριστά τα routes:

// router.get('/', getTasks)
// router.post('/',setTask)
// router.put('/:id',updateTask)
// router.delete('/:id',deleteTask)

//Με αυτόν τον τρόπο μπαίνουν αλυσιδωτά όσα requests αναφέρονται
//στο ίδιο route.
// router.route('/').get(getTasks).post(setTask)

//!!! Οι functions ορίζονται στο controller !!!

module.exports = router