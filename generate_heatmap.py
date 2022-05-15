import plotly.express as px

data = [
  [ 5, 5, 1, 2, 1 ],
  [ 6, 14, 4, 2, 1 ],
  [ 4, 7, 1, 1, 0 ],
  [ 11, 22, 8, 4, 2 ],
  [ 8, 5, 1, 2, 1 ]
]

fig = px.imshow(
     data,
     labels=dict(x="Orientation politique", y="Structure d'organisation", color="Nombre de participants"),
     x=['Très à gauche', 'Plutôt à gauche', 'Au centre', 'Plutôt à droite', 'Très à droite'],
     y=['Horizontale, certainement', 'Plutôt horizontale', 'Peu d\'importance', 'Plutôt verticale', 'Verticale, certainement'],
     text_auto=True
)
fig.write_html("index.html")
