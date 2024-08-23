'use client';

import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import Component4 from '../components/Component4';
import styles from '@/styles/GridHomePage.module.css';

const componentMap = {
  Component1: Component1,
  Component2: Component2,
  Component3: Component3,
  Component4: Component4,
};

const ItemTypes = {
  COMPONENT: 'component',
};

const GridLayout = ({ settings }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.grid_container}>
        {settings.map(({ component, col, row, bgColor }, index) => {
          const Component = componentMap[component]; // Get the correct component from the map

          return (
            <div
              className={styles.grid_item}
              key={index}
              style={{
                gridColumn: col,
                gridRow: row,
                backgroundColor: bgColor || '#f0f0f0',
              }}
            >
              <Component /> {/* Render the dynamic component */}
            </div>
          );
        })}
      </div>
    </DndProvider>
  );
};

export default GridLayout;
