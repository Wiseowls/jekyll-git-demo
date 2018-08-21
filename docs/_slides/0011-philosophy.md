---
title: git vs TFS philosophy
---

# Features
<section>
	<table>
		<tr>
			<th>git</th>
			<th>TFS</th>
		</tr>
		<tr>
			<td>offline</td>
			<td>online</td>
		</tr>
		<tr>
			<td>everyone has full copy and all history</td>
			<td> you get what you check out only</td>
		</tr>
		<tr>
			<td>commit to local repository first</td>
			<td> commit straight to server</td>
		</tr>
	</table>
</section>
<section>
	<table>
		<tr>
			<th>git</th>
			<th>TFS</th>
		</tr>

		<tr>
			<td>branch is a pointer to commit = cheap</td>
			<td>branch is a full copy of parent = expensive</td>
		</tr>
		<tr>
			<td>one copy of code at all times</td>
			<td>one copy of code per branch</td>
		</tr>
		<tr>
			<td>merge is a commit and is non-destructive</td>
			<td>merging is painful</td>
		</tr>
	</table>
</section>
<section>
	<table>
		<tr>
			<th>git</th>
			<th>TFS</th>
		</tr>

		<tr>
			<td>does one thing and does it well</td>
			<td>is much more than just a VCS (Work Items etc...)</td>
		</tr>
		<tr>
			<td>UI and tools are available from 3rd parties, but integration can be flaky</td>
			<td>Microsoft provides all ecosystem. Experience and tools are streamlined and easy to use</td>
		</tr>		
	</table>
</section>