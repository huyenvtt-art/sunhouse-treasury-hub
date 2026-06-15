import { useCallback, useMemo } from 'react'
import ReactFlow, {
  Background,
  Controls,
  type Edge,
  type Node,
  MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'
import type { SchemeType } from '../../types'

interface CashFlowDiagramProps {
  scheme: SchemeType
  amount: number
}

export function CashFlowDiagram({ scheme, amount }: CashFlowDiagramProps) {
  const nodes: Node[] = useMemo(() => {
    const amountLabel = `${(amount / 1e9).toFixed(0)} tỷ`
    const baseNodes: Node[] = [
      {
        id: 'source',
        position: { x: 0, y: 120 },
        data: { label: `Nguồn vốn\n${amountLabel}` },
        style: {
          background: '#0a1628',
          color: '#fff',
          border: '2px solid #0066ff',
          borderRadius: '12px',
          padding: '12px 16px',
          fontSize: '13px',
          fontWeight: 600,
          textAlign: 'center',
          minWidth: '120px',
        },
      },
      {
        id: 'pool',
        position: { x: 220, y: 120 },
        data: { label: 'Quỹ tập đoàn\nTreasury Pool' },
        style: {
          background: '#0066ff',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          padding: '12px 16px',
          fontSize: '13px',
          fontWeight: 600,
          textAlign: 'center',
          minWidth: '130px',
        },
      },
    ]

    if (scheme === 'A') {
      return [
        ...baseNodes,
        {
          id: 'short',
          position: { x: 440, y: 60 },
          data: { label: 'Đầu tư ngắn hạn\n8.5% / 90 ngày' },
          style: nodeStyle('#1b2a4a'),
        },
        {
          id: 'return',
          position: { x: 660, y: 120 },
          data: { label: 'Thu hồi vốn\n+ Lợi nhuận' },
          style: nodeStyle('#10b981'),
        },
      ]
    }

    if (scheme === 'B') {
      return [
        ...baseNodes,
        {
          id: 'optimize',
          position: { x: 440, y: 40 },
          data: { label: 'Tối ưu dòng tiền\n11.2% / 180 ngày' },
          style: nodeStyle('#1b2a4a'),
        },
        {
          id: 'hedge',
          position: { x: 440, y: 180 },
          data: { label: 'Phòng vệ rủi ro\nHedge Fund' },
          style: nodeStyle('#243656'),
        },
        {
          id: 'return',
          position: { x: 660, y: 120 },
          data: { label: 'Thu hồi vốn\n+ Lợi nhuận' },
          style: nodeStyle('#10b981'),
        },
      ]
    }

    return [
      ...baseNodes,
      {
        id: 'growth',
        position: { x: 440, y: 20 },
        data: { label: 'Đầu tư tăng trưởng\n14.8% / 365 ngày' },
        style: nodeStyle('#1b2a4a'),
      },
      {
        id: 'venture',
        position: { x: 440, y: 120 },
        data: { label: 'Venture Capital\nCao rủi ro' },
        style: nodeStyle('#243656'),
      },
      {
        id: 'fx',
        position: { x: 440, y: 220 },
        data: { label: 'FX Trading\nĐa tiền tệ' },
        style: nodeStyle('#243656'),
      },
      {
        id: 'return',
        position: { x: 660, y: 120 },
        data: { label: 'Thu hồi vốn\n+ Lợi nhuận' },
        style: nodeStyle('#10b981'),
      },
    ]
  }, [scheme, amount])

  const edges: Edge[] = useMemo(() => {
    const baseEdges: Edge[] = [
      edge('source', 'pool', '#0066ff'),
    ]

    if (scheme === 'A') {
      return [
        ...baseEdges,
        edge('pool', 'short', '#66aaff'),
        edge('short', 'return', '#10b981'),
      ]
    }

    if (scheme === 'B') {
      return [
        ...baseEdges,
        edge('pool', 'optimize', '#66aaff'),
        edge('pool', 'hedge', '#66aaff'),
        edge('optimize', 'return', '#10b981'),
        edge('hedge', 'return', '#10b981'),
      ]
    }

    return [
      ...baseEdges,
      edge('pool', 'growth', '#66aaff'),
      edge('pool', 'venture', '#66aaff'),
      edge('pool', 'fx', '#66aaff'),
      edge('growth', 'return', '#10b981'),
      edge('venture', 'return', '#10b981'),
      edge('fx', 'return', '#10b981'),
    ]
  }, [scheme])

  const onInit = useCallback(() => {}, [])

  return (
    <div className="h-[380px] rounded-xl border border-slate-200 bg-white overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onInit={onInit}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={true}
        zoomOnScroll={true}
      >
        <Background color="#e2e8f0" gap={16} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  )
}

function nodeStyle(bg: string) {
  return {
    background: bg,
    color: '#fff',
    border: '1px solid #3388ff',
    borderRadius: '12px',
    padding: '10px 14px',
    fontSize: '12px',
    fontWeight: 500,
    textAlign: 'center' as const,
    minWidth: '120px',
  }
}

function edge(source: string, target: string, color: string): Edge {
  return {
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
    style: { stroke: color, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color },
  }
}
