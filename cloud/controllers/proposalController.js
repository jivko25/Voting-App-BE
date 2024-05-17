const router = require('express').Router();
const proposalService = require('../services/proposalServise');

// Create proposal
router.post("/", async (req, res) => {
    //TODO: change user id ('beee89a1-0c38-44a6-9640-e2fc8d8f4ded') to be taken from the request
    const { data, error } = await proposalService.create({ ...req.body, created_by: 'beee89a1-0c38-44a6-9640-e2fc8d8f4ded' });

    if (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating proposal", status: "error", code: 500 });
    } else {
        res.json({ data, status: "success", code: 200 });
    }
});

// Get all proposals
router.get("/", async (req, res) => {
    const { data, error } = await proposalService.getProposals();

    if (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while fetching proposals", status: "error", code: 500 });
    } else {
        res.json({ data, status: "success", code: 200 });
    }
});

// Get proposal by Id
router.get("/:id", async (req, res) => {
    const { data, error } = await proposalService.getProposalById(req.params.id);

    if (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while fetching proposal", status: "error", code: 500 });
    } else {
        res.json({ data, status: "success", code: 200 });
    }
});

// Update proposal
router.patch('/:id', async (req, res) => {
    const { data, error } = await proposalService.update(req.params.id, req.body);

    if (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating proposal", status: "error", code: 500 });
    } else {
        res.json({ data, status: "success", code: 200 });
    }
})

// Delete proposal
router.delete("/:id", async function (req, res) {
    const { data, error } = await proposalService.deleteProposal(req.params.id);

    if (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting proposal", status: "error", code: 500 });
    } else {
        res.json({ data, status: "success", code: 200 });
    }
});

module.exports = router;