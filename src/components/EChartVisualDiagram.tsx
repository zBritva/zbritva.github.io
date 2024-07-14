import Mermaid from '@theme/Mermaid';
import React from 'react';

export const EChartVisualDiagram = ({children}) => {
    return (
        <>
        <p>EChartVisualDiagram</p>
        <Mermaid
        value={`graph TD;
            A-->B;
            A-->C;
            B-->D;
            C-->D;`}
        />
    </>
    );
};

