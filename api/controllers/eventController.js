//api/controllers/eventController.js
module.exports = {
    // Create action
    create: async function(req, res) {
      try {
        const { name, location, date } = req.body;
        const event = await Event.create({ name, location, date }).fetch();
        return res.view('pages/listevents',event );
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Read action
    find: async function(req, res) {
      try {
        const event = await Event.find();
        //return res.json(events);
        return res.view('listevents',{event})
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Update action
    update: async function(req, res) {
      try {
        const { id } = req.params;
        const { name, location, date } = req.body;
        const updatedEvent = await Event.updateOne({ id }).set({ name, location, date });
        if (!updatedEvent) {
          return res.notFound('Event not found');
        }
        return res.json(updatedEvent);
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Delete action
    delete: async function(req, res) {
      try {
        const { id } = req.params;
        const deletedEvent = await Event.destroyOne({ id });
        if (!deletedEvent) {
          return res.notFound('Event not found');
        }
        return res.json(deletedEvent);
      } catch (err) {
        return res.serverError(err);
      }
    }
  };
  