import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;

export default function BackLog({ setData, lists, onItemMoved }) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const updatedLists = { ...lists };
      const sourceList = updatedLists[source.droppableId];

      const [removedItem] = sourceList.splice(source.index, 1);
      const destinationIndex = destination.index;

      const updatedSourceList = [
        ...sourceList.slice(0, destinationIndex),
        removedItem,
        ...sourceList.slice(destinationIndex),
      ];

      updatedLists[source.droppableId] = updatedSourceList;

      if (onItemMoved) {
        onItemMoved(source.droppableId, destination.droppableId, removedItem);
      }

      setData(updatedLists);
    } else {
      const updatedLists = { ...lists };

      const sourceList = updatedLists[source.droppableId];
      const [removedItem] = sourceList.splice(source.index, 1);

      const destinationList = updatedLists[destination.droppableId];
      destinationList.splice(destination.index, 0, {
        ...removedItem,
        sourceListName: source.droppableId,
        destinationListName: destination.droppableId,
      });

      if (onItemMoved) {
        onItemMoved(source.droppableId, destination.droppableId, removedItem);
      }

      setData(updatedLists);
    }
  };

  return (
    <div className="BackLog">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {Object.keys(lists).map((listId) => (
          <Droppable droppableId={listId} key={listId} direction="horizontal">
            {(provided) => (
              <div
                className="list"
                ref={provided.innerRef}
                style={{
                  display: "flex",
                  width: "97%",
                  height: "28%",
                  padding: grid,
                  border: "1px solid #ccc",
                  overflow: "auto",
                  margin: grid,
                }}
                {...provided.droppableProps}
              >
                {lists[listId].map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`${item.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="item"
                        ref={provided.innerRef}
                        style={getItemStyle(provided.isDragging)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="red">Como: </span> {item.perfil} <br />{" "}
                        <span className="red">Quero: </span> {item.quero} <br />{" "}
                        <span className="red">Para: </span> {item.para}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}

const getItemStyle = (isDragging) => ({
  userSelect: "none",
  padding: grid * 2,
  marginBottom: grid,
  background: isDragging ? "lightgreen" : "grey",
  width: 250,
  border: isDragging ? "1px solid #2196F3" : "0",
  borderRadius: isDragging ? 4 : 0,
});
