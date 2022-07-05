import { nanoid } from "nanoid";


export const Mutation = {
  // Parent'ı kullanmadıgımız için _ diye bir değişken oluşturduk
  createUser: (_, { data }, { pubsub, db }) => {
    const user = {
      id: nanoid(),
      ...data,
    };

    db.users.push(user);
    pubsub.publish("userCreated", { userCreated: user });

    return user;
  },
  updateUser: (parent, { id, data }, { pubsub, db }) => {
    const user_index = db.users.findIndex(
      (user) => user.id.toString() === id.toString()
    );

    if (user_index === -1) {
      throw new Error("User not found");
    }

    const updated_user = (db.users[user_index] = {
      ...db.users[user_index],
      ...data,
    });
    pubsub.publish("userUpdated", { userUpdated: updated_user });

    return updated_user;
  },
  deleteUser: (parent, { id }, { pubsub, db }) => {
    const user_index = db.users.findIndex(
      (user) => user.id.toString() === id.toString()
    );

    if (user_index === -1) {
      throw new Error("User not found");
    }

    const deleted_user = db.users[user_index];
    db.
    db.users.splice(user_index, 1);

    pubsub.publish("userDeleted", { userDeleted: deleted_user });

    return deleted_user;
  },
  deleteAllUsers: (parent, { data }, {pubsub, db}) => {
    const length = db.users.length;
    db.users.splice(0, length);

    return {
      count: length,
    };
  },
  createEvent: (parent, { data }, { pubsub, db }) => {
    const event = {
      id: nanoid(),
      ...data,
    };

    db.events.push(event);
    pubsub.publish("eventCreated", { eventCreated: event });

    return event;
  },
  updateEvent: (parent, { id, data }, { pubsub, db }) => {
    const event_index = db.events.findIndex(
      (event) => event.id.toString() === id.toString()
    );

    if (event_index === -1) {
      throw new Error("Event not found");
    }

    const updated_event = (db.events[event_index] = {
      ...db.events[event_index],
      ...data,
    });
    pubsub.publish("eventUpdated", { eventUpdated: updated_event });

    return updated_event;
  },
  deleteEvent: (parent, { id }, { pubsub, db }) => {
    const event_index = db.events.findIndex(
      (event) => event.id.toString() === id.toString()
    );

    if (event_index === -1) {
      throw new Error("Event not found");
    }

    const deleted_event = db.events[event_index];
    db.events.splice(event_index, 1);
    pubsub.publish("eventDeleted", { eventDeleted: deleted_event });

    return deleted_event;
  },
  deleteAllEvents: (parent, { data }, {pubsub, db}) => {
    const length = db.events.length;
    db.events.splice(0, length);

    return {
      count: length,
    };
  },

  // Location
  createLocation: (parent, { data }, { pubsub, db }) => {
    const location = {
      id: nanoid(),
      ...data,
    };

    db.locations.push(location);
    pubsub.publish("locationCreated", { locationCreated: location });

    return location;
  },
  updateLocation: (parent, { id, data }, { pubsub, db }) => {
    const location_index = db.locations.findIndex(
      (location) => location.id.toString() === id.toString()
    );

    if (location_index === -1) {
      throw new Error("Location not found");
    }

    const updated_location = (db.locations[location_index] = {
      ...db.locations[location_index],
      ...data,
    });
    pubsub.publish("locationUpdated", { locationUpdated: updated_location });

    return updated_location;
  },
  deleteLocation: (parent, { id }, { pubsub, db }) => {
    const location_index = db.locations.findIndex(
      (location) => location.id.toString() === id.toString()
    );

    const deleted_locations = db.locations[location_index];
    db.locations.splice(location_index, 1);
    pubsub.publish("locationDeleted", { locationDeleted: deleted_locations });

    return deleted_locations;
  },
  deleteAllLocations: (parent, { id, data }, { pubsub, db }) => {
    const length = db.locations.length;
    db.locations.splice(0, length);

    return {
      count: length,
    };
  },
  createParticipant: (parent, { data }, { pubsub, db }) => {
    const participant = {
      id: nanoid(),
      ...data,
    };

    db.participants.push(participant);
    pubsub.publish("participantCreated", { participantCreated: participant });

    return participant;
  },
  updateParticipant: (parent, { id, data }, { pubsub, db }) => {
    const participant_index = db.participants.findIndex(
      (participant) => participant.id.toString() === id.toString()
    );

    if (participant_index === -1) {
      throw new Error("Participant not found");
    }

    const updated_participant = (db.participants[participant_index] = {
      ...db.participants[participant_index],
      ...data,
    });
    pubsub.publish("participantUpdated", {
      participantUpdated: updated_participant,
    });

    return updated_participant;
  },
  deleteParticipant: (parent, { id }, { pubsub, db }) => {
    const participant_index = db.participants.findIndex(
      (participant) => participant.id.toString() === id.toString()
    );

    if (participant_index === -1) {
      throw new Error("Participant not found");
    }

    const deleted_participant = db.participants[participant_index];
    db.participants.splice(participant_index, 1);
    pubsub.publish("participantDeleted", {
      participantDeleted: deleted_participant,
    });

    return deleted_participant;
  },
  deleteAllParticipants: (parent, { id, data }, { pubsub, db }) => {
    const length = db.participants.length;
    db.participants.splice(0, length);

    return {
      count: length,
    };
  },
};
