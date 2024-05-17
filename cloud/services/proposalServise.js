const supabase = require('../configs/supabaseConfig');

function getProposals() {
    const result = supabase.from('proposals').select('*');
    console.log(result);
    return result;
}

function getProposalById(id) {
    return supabase
        .from('proposals')
        .select('*')
        .eq('proposal_id', id);
}

function update(id, body) {
    return supabase
        .from('proposals')
        .update(body)
        .eq('proposal_id', id);
}

function create({ title, description, created_by }) {
    return supabase
        .from('proposals')
        .insert([
            { title, description, created_by }
        ])
}

function deleteProposal(id) {
    return supabase
        .from('proposals')
        .delete()
        .eq('proposal_id', id);
}


module.exports = {
    getProposals,
    getProposalById,
    update,
    create,
    deleteProposal,
};