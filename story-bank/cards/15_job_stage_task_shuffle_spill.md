# 卡片：Job/Stage/Task 与 Shuffle（1-2min）
每个行动算子会触发一个 Job。Stage 是按宽依赖切分的计算阶段，窄依赖不会切分 Stage。Task 是 Stage 的最小执行单元，对应一个分区。Shuffle 是宽依赖下的数据重分区过程，涉及序列化、网络传输、排序与磁盘写入，是性能关键点。Spill 指内存不足时写磁盘的行为，常出现在 shuffle 或聚合阶段。
